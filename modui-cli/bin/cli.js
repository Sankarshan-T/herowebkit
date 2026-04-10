#!/usr/bin/env node
import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const themeTemplatePath = path.join(__dirname, '../templates/theme.txt');
const userCssPath = path.join(process.cwd(), 'app/globals.css');
const program = new Command();

program
    .command('add <component>')
    .action(async (component) => {
        const name = component.toLowerCase();

        const templatePath = path.join(__dirname, '../templates', `${name}.tsx.txt`);

        const targetPath = path.join(process.cwd(), 'components/ui', `${name}.tsx`);

        try {
            if (!(await fs.pathExists(templatePath))) {
                console.log(chalk.red(`X Template not found at: ${templatePath}`));
                return;
            }

            const templateContent = await fs.readFile(templatePath, 'utf8');
            await fs.ensureDir(path.dirname(targetPath));
            await fs.writeFile(targetPath, templateContent);

            console.log(chalk.green(`✔ Created ${name}.tsx`));
        } catch (err) {
            console.error(err);
        }

        try {
            const themeContent = await fs.readFile(themeTemplatePath, 'utf8');

            let existingCss = "";
            if (await fs.pathExists(userCssPath)) {
                existingCss = await fs.readFile(userCssPath, 'utf8');
            }

            if (!existingCss.includes('--primary')) {
                const formattedTheme = `\n@layer base {\n${themeContent}\n}\n`;

                await fs.appendFile(userCssPath, formattedTheme);
                console.log(chalk.green("✔ Theme variables injected into globals.css"));
            }
        } catch (err) {
            console.error(chalk.red("Could not inject theme:"), err);
        }

    });

program.parse();