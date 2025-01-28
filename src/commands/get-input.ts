import { ActorCommand } from '../lib/actor-command.js';
import { outputInputFromDefaultStore } from '../lib/actor.js';

export class GetInputCommand extends ActorCommand<typeof GetInputCommand> {
	static override description =
		'Gets the Actor input value from the default key-value store associated with the Actor run.';

	async run() {
		await outputInputFromDefaultStore();
	}
}
