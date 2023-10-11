#!/usr/bin/env node
import 'reflect-metadata';
import inquirer from 'inquirer';

import { execSync } from 'child_process';

interface Answers {
  type: string;
  message: string;
}

const types: string[] = ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test'];
inquirer.prompt<Answers>([
  {
    type: 'list',
    name: 'type',
    message: 'Select the type of change you are committing:',
    choices: types,
  },
  {
    type: 'input',
    name: 'message',
    message: 'Enter a short description of your change (max 100 chars):',
    validate: (input: string | unknown[]) => input.length <= 100,
  }
]).then(async (answers: Answers) => {
  const commitMessage: string = `[${answers.type}]: ${answers.message}`;
  try {
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
      const answers = await inquirer.prompt([{
        name: 'push',
        type: 'confirm',
        message: 'Do you want to push your changes to GitHub now ?'
      }]);
      const { push } = answers;
      if (push) execSync('git push -u origin HEAD');
  } catch (error) {
    console.error('operation failed');
    throw error;
  }
});