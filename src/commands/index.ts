import { ActorCommand } from '../lib/actor-command.js';

export class ActorIndexCommand extends ActorCommand<typeof ActorIndexCommand> {
	static override description = 'Manages runtime data operations inside of a running Actor.';

	async run() {
		await this.printHelp();
	}
}
