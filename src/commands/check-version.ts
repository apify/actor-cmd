import { Flags } from '@oclif/core';

import { ActorCommand } from '../lib/actor-command.js';
import { checkLatestVersion } from '../lib/version_check.js';

export class CheckVersionCommand extends ActorCommand<typeof CheckVersionCommand> {
	static override description = 'Checks that installed Apify CLI version is up to date.';

	static override flags = {
		'enforce-update': Flags.boolean({
			char: 'e',
			description: '[Optional] Enforce version update from NPM',
			required: false,
		}),
	};

	static override hidden = true;

	static override hiddenAliases = ['cv'];

	async run() {
		await checkLatestVersion(this.flags.enforceUpdate);
	}
}
