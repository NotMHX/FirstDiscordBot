const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		if (interaction.isButton()) {
			console.log(interaction);
		}

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
            await console.log(`Executed the ${interaction.commandName} command.`);
		} catch (error) {
			console.error(error);
            console.error(`Error executing ${interaction.commandName}.`);
		}
	},
};
