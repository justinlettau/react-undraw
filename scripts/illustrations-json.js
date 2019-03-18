const rp = require('request-promise');
const $ = require('cheerio');
const fs = require('fs-extra');
const ora = require('ora');

const url = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations';

/**
 * Download all the illustrations currently ~31 pages the 35 arbitrary can be upped
 */
function generate() {
  const spinner = ora('Generating illustrations ...').start();
  const crawlUrl = index => `https://undraw.co/illustrations/load/${index}`;
  const promises = [];
  const data = [];

  for (let i = 0; i < 35; i++) {
    promises.push(
      rp(crawlUrl(i))
        .then(html => {
          const items = $('div[class=item]', html);
          $(items).each(function(i, elem) {
            const name = $('h4', elem).text();
            const svgLink = $('a', elem).attr('data-src');
            const svg = svgLink.replace(`${url}/`, '');
            data.push({ name, svg });
          });
        })
        .catch(function(err) {
          console.log(err);
        })
    );
  }
  return Promise.all(promises)
    .then(() => {
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
      fs.writeFileSync('scripts/illustrations.json', JSON.stringify(sortedData, null, 2));
    })
    .then(() => {
      spinner.succeed('Successfully generated illustratios json!');
    });
}

generate();
