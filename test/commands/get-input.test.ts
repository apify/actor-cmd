import { writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import { ensureDirSync } from 'fs-extra';

import { getLocalKeyValueStorePath } from '../../src/lib/utils.js';
import { useTempPath } from '../__setup__/hooks/useTempPath.js';

const actorName = 'test-actor-01';
const { beforeAllCalls, afterAllCalls, joinPath } = useTempPath(actorName, {
	create: true,
	remove: true,
	cwd: true,
	cwdParent: false,
});

const { GetInputCommand } = await import('../../src/commands/get-input.js');

describe('actor get-input', () => {
	beforeAll(async () => {
		await beforeAllCalls();
		vitest.stubEnv('CRAWLEE_STORAGE_DIR', joinPath('storage'));
	});

	afterAll(async () => {
		await afterAllCalls();
		vitest.unstubAllEnvs();
	});

	it('should end with Error when not logged in', async () => {
		try {
			await GetInputCommand.run([], import.meta.url);
		} catch (error) {
			expect((error as Error).message).toBe('Key-value store with id: default does not exist.');
		}

		const inputPath = joinPath(getLocalKeyValueStorePath(), 'INPUT.json');
		ensureDirSync(dirname(inputPath));
		writeFileSync(inputPath, '{"awesome": true, "help": 123}', { flag: 'w' });

		const logMessageChunks = [] as (string | Uint8Array)[];

		process.stdout.write = (chunk) => {
			logMessageChunks.push(chunk);
			return true;
		};

		await GetInputCommand.run([], import.meta.url);

		expect(logMessageChunks[0]?.toString()).toEqual('{"awesome": true, "help": 123}');
	});
});
