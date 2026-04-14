#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import chalk from 'chalk';

const program = new Command();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
    .name('modui-uikit')
    .description('CLI to add components to your project')
    .version('1.0.1');

program
    .command('add <component>')
    .description('Add a component to your project')
    .action(async (component) => {
        const sourcePath = path.resolve(__dirname, '..', 'templates', `${component}.tsx.txt`);

        const targetDir = path.join(process.cwd(), 'components', 'ui');
        const targetPath = path.join(targetDir, `${component}.tsx`);

        try {
            const componentCode = await fs.readFile(sourcePath, 'utf8');

            await fs.mkdir(targetDir, { recursive: true });

            await fs.writeFile(targetPath, componentCode);

            console.log(chalk.green(`✔ Success! ${component} added to ${targetPath}`));

            if (componentCode.includes('lucide-react')) {
                console.log(chalk.blue('ℹ This component requires lucide-react. Ensure it is installed.'));
            }

        } catch (error) {
            if (error.code === 'ENOENT') {
                console.error(chalk.red(`\n❌ Error: Component "${component}" not found.`));
                console.error(chalk.gray(`Looked in: ${sourcePath}`));
            } else {
                console.error(chalk.red('\n❌ An unexpected error occurred:'), error.message);
            }
        }
    });

program.parse(process.argv);