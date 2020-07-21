module.exports = {
  '*.{json,html,md}': ['./node_modules/.bin/prettier --write', 'git add'],
  '*.l?(e|c)ss': ['./node_modules/.bin/stylelint --fix', 'git add'],
  '*.{js,jsx}': ['./node_modules/.bin/eslint --fix', 'git add'],
};
