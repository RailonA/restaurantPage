JavaScript
If you are not familiar with linters and GitHub Actions, read root level README.

Set-up GitHub Actions
This GitHub Action is going to run ESLint and Stylelint to help you find style issues.

Stylelint is a linter for your stylesheets that helps you avoid errors and enforce conventions.

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

Please do the following steps in this order:

In the first commit of your feature branch create a .github/workflows folder and add a copy of .github/workflows/linters.yml to that folder.
Remember to use the file linked above
Remember that .github folder starts with a dot.
Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.
If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
When you open your first pull request you should see the result of the GitHub Actions:
gh actions checks

Click on the Details link to see the full output and the errors that need to be fixed:

gh actions failing checks

Set-up linters in your local env
Note: The npm package manager is going to create a node_modules directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:

# .gitignore
node_modules/
ESLint
Run npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x (not sure how to use npm? Read this).
Copy .eslintrc.json to the root directory of your project.
Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.
If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
Run npx eslint . on the root of your directory of your project.
Fix linter errors.
IMPORTANT NOTE: feel free to research auto-correct options for Stylelint if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!
Stylelint
Run

npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
(not sure how to use npm? Read this).

Copy .stylelintrc.json to the root directory of your project.

Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.

If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it.
Run

npx stylelint "**/*.{css,scss}"
on the root of your directory of your project.

Fix linter errors.

IMPORTANT NOTE: feel free to research auto-correct options for Stylelint if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

Test/Deployment Actions
Feel free to add your own deployment actions which can run your tests and deploy to Heroku.

Make sure that you do not modify the .github/workflows/linters.yml but that you create a separe GitHub Action workflow file for that.