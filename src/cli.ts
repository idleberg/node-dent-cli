import { Command } from 'commander';
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path';
import { promises as fs } from 'node:fs';
import { createFormatter } from '@nsis/dent';
import { glob } from 'glob'
import logSymbols from 'log-symbols';
import colors from 'picocolors';

await main();

async function main() {
	const program = new Command();
	const version = await getVersion();

	program
		.version(version)
		.description('CLI tool to format NSIS scripts')
		.arguments('<file...>')
		.option('--eol <"crlf"|"lf">', 'control how line-breaks are represented', value => ['crlf', 'lf'].includes(value))
		.option('-i, --indent-size <number>', 'number of units per indentation level', value => parseInt(value, 10), 2)
		.option('-s, --use-spaces', 'indent with spaces instead of tabs', false)
		.option('--trim', 'trim empty lines', true)
		.option('--write', 'edit files in-place', false)
		.option('--quiet', 'suppress output', false)
		.option('--debug', 'prints additional debug messages', false)
		.parse(process.argv);

	const options = program.opts();
	const args = Array.isArray(program.args)
		? program.args
		: [ program.args ];

	if (!args.length) {
		program.help();
	}

	if (options.debug) {
		console.log('\nCLI parameters:', {args, options});
	}

	const format = createFormatter({
		endOfLines: options.eol,
		indentSize: options.indent,
		trimEmptyLines: options.trim,
		useTabs: !options.useSpaces
	});

	const files = await glob(args);
	const isVerbose = options.write && !options.quiet;

	if (isVerbose && !options.debug) {
		console.log(/* let it breathe */)
	}

	console.time('\nCompleted');

	await Promise.all(files.map(async file => {
		if (isVerbose) {
			console.time(`${logSymbols.success} ${colors.blue(file)}`)
		}

		const rawContents = (await fs.readFile(file)).toString();
		const formattedContents = format(rawContents);

		if (options.debug) {
			console.log('\nConversion:', {
				raw: rawContents,
				formatted: formattedContents
			});
		}

		if (options.write) {
			try {
				await fs.writeFile(file, formattedContents, {
					encoding: 'utf-8'
				});

				if (isVerbose) {
					console.timeEnd(`${logSymbols.success} ${colors.blue(file)}`)
				}
			} catch (error) {
				if (isVerbose) {
					console.error(`${logSymbols.error} ${colors.blue(file)}\n${colors.dim(error instanceof Error ? error.message : error)}`);
				}
			}

		} else {
			console.log(formattedContents);
		}
	}));

	if (isVerbose) {
		console.timeEnd(`\nCompleted`);
	}
}

async function getVersion() {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const { version } = JSON.parse(
		await fs.readFile(resolve(__dirname, '../package.json'), 'utf8')
	);

	return version || 'dev';
}
