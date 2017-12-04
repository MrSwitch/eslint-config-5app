/* eslint-env mocha */
const eslint = require('eslint');
const expect = require('chai').expect;

it('load config in eslint to validate all rule syntax is correct', () => {
	const CLIEngine = eslint.CLIEngine;

	const cli = new CLIEngine({
		useEslintrc: false,
		configFile: 'eslintrc.json'
	});

	const text = `
const foo = 1;
const bar = function() {};
bar(foo);
`;

	expect(cli.executeOnText(text).errorCount).to.eql(0);
});