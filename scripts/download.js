const axios = require('axios');
const fs = require('fs-extra');
const ora = require('ora');
const path = require('path');
const rp = require('request-promise');
const $ = require('cheerio');

const illustrations = require('./illustrations.json');

const url = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations';

function buildIlustrationsJson() {
  const crawlUrl = index => `https://undraw.co/illustrations/load/${index}`;
  const promises = [];
  const data = [];

  for (let i = 0; i < 31; i++) {
    promises.push(
      rp(crawlUrl(i))
        .then(function(html) {
          const items = $('div[class=item]', html);
          $(items).each(function(i, elem) {
            const name = $('h4', elem).text();
            const svgLink = $('a', elem).attr('data-src');
            const svg = svgLink.replace(`${url}/`, '');
            data.push({ name, svg });
          });
        })
        .catch(function(err) {
          //handle error
        })
    );
  }
  return Promise.all(promises).then(() => {
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    fs.writeFileSync('scripts/illustrations.json', JSON.stringify(sortedData, null, 2));
  });
}
/**
 * Download all defined SVG files.
 */
function download() {
  const dest = './svg';
  const spinner = ora('Downloading ...').start();
  const promises = [];
  const illustrations = JSON.parse(fs.readFileSync('scripts/illustrations.json'));

  illustrations.forEach(item => {
    const dir = path.join(dest, item.svg);

    promises.push(axios.get(`${url}/${item.svg}`).then(res => fs.outputFileSync(dir, res.data)));
  });

  Promise.all(promises)
    .then(() => spinner.succeed(`Successfully downloaded ${illustrations.length} files!`))
    .catch(error => spinner.fail(error));
}

// execute
buildIlustrationsJson().then(() => {
  download();
});
