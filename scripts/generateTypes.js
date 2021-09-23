const { getDirContent, writeContentToFile } = require('./helpers/utils');

const chalk = require('chalk');

function generateTypesForIconComponent() {
    const componentFolderPaths = ['dist/mi', 'dist/custom'];

    componentFolderPaths.forEach(componentFolderPath => {
        console.log(chalk.green('Generating types for: ') + chalk.yellow(componentFolderPath));

        const components = getDirContent(componentFolderPath);

        components.forEach(component => {
            if (component.endsWith('.js') && !component.includes('index.js')) {
                const componentName = component.slice(0, -3);

                const content = `import { ReactIconComponentType } from '../types';

declare const ${componentName}: ReactIconComponentType;
export default ${componentName};
            `

                const filePath = `${componentFolderPath}/${componentName}.d.ts`;
                writeContentToFile(filePath, content);
            }
        });

        console.log(chalk.gray('Finished.\n\n'));
    });
}

generateTypesForIconComponent();