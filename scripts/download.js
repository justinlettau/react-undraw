const axios = require('axios');
const fs = require('fs-extra');
const ora = require('ora');
const path = require('path');

const illustrations = require('./illustrations.json');
const url = 'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations';

/**
 * Download all defined SVG files.
 */
function download() {
  const dest = './svg';
  const spinner = ora('Downloading ...').start();
  const promises = [];

  illustrations.forEach(item => {
    const dir = path.join(dest, item.svg);

    promises.push(axios.get(`${url}/${item.svg}`).then(res => fs.outputFileSync(dir, res.data)));
  });

  Promise.all(promises)
    .then(() => spinner.succeed(`Successfully downloaded ${illustrations.length} files!`))
    .catch(error => spinner.fail(error));
}

// execute
download();
