import { getLatestNpmVersion } from '../src/lib/version_check.js';

describe('VersionCheck', () => {
	describe('getLatestNpmVersion()', () => {
		// TODO we first need to publish something
		it.skip('should return package version', async () => {
			const latestVersion = await getLatestNpmVersion();
			expect(latestVersion).to.match(/^\d+\.\d+\.\d+$/);
		});
	});
});
