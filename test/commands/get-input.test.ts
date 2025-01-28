import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

import { runCommand } from '@oclif/test';
import { ensureDirSync } from 'fs-extra';

import { getLocalKeyValueStorePath } from '../../src/lib/utils.js';
import { useTempPath } from '../__setup__/hooks/useTempPath.js';

const actName = 'init-my-actor';
const { beforeAllCalls, afterAllCalls, joinPath } = useTempPath(actName, {
	create: true,
	remove: true,
	cwd: true,
	cwdParent: false,
});

describe('actor get-input', () => {
	beforeEach(async () => {
		await beforeAllCalls();
	});

	afterEach(async () => {
		await afterAllCalls();
	});

	it('should end with Error when not logged in', async () => {
		const { error } = await runCommand(['get-input'], import.meta.url);
		expect(error?.message).toBe('Key-value store with id: default does not exist.');

		// const actorPath = joinPath('test', 'tmp', 'foo-bar');
		const inputPath = joinPath(getLocalKeyValueStorePath(), 'INPUT.json');
		console.log(inputPath);
		ensureDirSync(dirname(inputPath));
		writeFileSync(inputPath, '{"awesome": true, "help": 123}', { flag: 'w' });
		// console.log(joinPath(import.meta.url, actorPath));
		const res = await runCommand(['get-input'], import.meta.url);
		console.log('res', res);
		// expect(error).toBeTruthy();
	});

	// it('should work when logged in', async () => {
	// 	const spy = vitest.spyOn(console, 'log');
	//
	// 	await LoginCommand.run(['--token', TEST_USER_TOKEN], import.meta.url);
	// 	await InfoCommand.run([], import.meta.url);
	//
	// 	const userInfoFromConfig = loadJsonFileSync<{ id: string }>(AUTH_FILE_PATH());
	//
	// 	expect(spy).toHaveBeenCalledTimes(2);
	// 	expect(spy.mock.calls[1][0]).to.include(userInfoFromConfig.id);
	// });
});
