import { writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import { ensureDirSync } from 'fs-extra';

import { GetInputCommand } from '../../src/commands/get-input.js';
import { getLocalKeyValueStorePath } from '../../src/lib/utils.js';
import { useTempPath } from '../__setup__/hooks/useTempPath.js';

describe('actor get-input', () => {
	const actorName = 'test-actor-01';
	const { beforeAllCalls, afterAllCalls, joinPath } = useTempPath(actorName, {
		create: true,
		remove: true,
		cwd: true,
		cwdParent: true,
	});

	beforeEach(async () => {
		await beforeAllCalls();
	});

	afterEach(async () => {
		await afterAllCalls();
	});

	it.skip('should end with Error when not logged in', async () => {
		try {
			await GetInputCommand.run([], import.meta.url);
		} catch (error) {
			expect((error as Error).message).toBe('Key-value store with id: default does not exist.');
		}

		// const actorPath = joinPath('test', 'tmp', 'foo-bar');
		const inputPath = joinPath(getLocalKeyValueStorePath(), 'INPUT.json');
		ensureDirSync(dirname(inputPath));
		console.log(inputPath);
		console.log(dirname(inputPath));
		writeFileSync(inputPath, '{"awesome": true, "help": 123}', { flag: 'w' });
		// console.log(joinPath(import.meta.url, actorPath));
		const res = await GetInputCommand.run([], import.meta.url);
		console.log('res', res);
		// expect(error).toBeTruthy();
	});
});
