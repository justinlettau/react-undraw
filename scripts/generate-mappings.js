const { EOL } = require('os');
const dashify = require('dashify');
const fs = require('fs-extra');
const ora = require('ora');
const pascalCase = require('pascal-case');
const path = require('path');

const illustrations = require('./illustrations.json');

/**
 * Generate mapping file.
 */
function generate() {
  const spinner = ora('Generating mappings ...').start();
  const dest = path.join('./src/lib/illustrations', 'mappings.js');
  const prefix = 'Undraw';
  let content = '';

  // banner
  content += '// Generated file, do not edit directly!';
  content += EOL;
  content += EOL;

  illustrations.forEach(item => {
    const component = prefix + pascalCase(item.name);
    content += `import ${component} from '../illustrations/${component}';`;
    content += EOL;
  });

  content += EOL;
  content += 'const mappings = {';
  content += EOL;

  illustrations.forEach((item, index) => {
    const name = dashify(item.name);
    const component = prefix + pascalCase(item.name);
    const quotedName = name.indexOf('-') !== -1 ? `'${name}'` : name;

    content += `  ${quotedName}: ${component}`;

    if (index !== illustrations.length - 1) {
      content += ',';
    }

    content += EOL;
  });

  content += '};';
  content += EOL;
  content += EOL;
  content += 'export default mappings;';
  content += EOL;

  fs.outputFileSync(dest, content);
  spinner.succeed('Successfully generated mappings!');
}

// execute
generate();
