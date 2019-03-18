const { EOL } = require('os');
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');

const illustrations = require('./illustrations.json');

function generate() {
  const spinner = ora('Generating exports ...').start();
  const dest = path.join('./src/lib/illustrations', 'index.js');
  const prefix = 'Undraw';
  let content = '';

  // banner
  content += '// Generated file, do not edit directly!';
  content += EOL;
  content += EOL;

  illustrations.forEach(item => {
    const component = prefix + pascalCase(item.name);
    content += `export { default as ${component} } from './${component}';`;
    content += EOL;
  });

  fs.outputFileSync(dest, content);
  spinner.succeed('Successfully generated index!');
}

// execute
generate();
