const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		
        if (interaction.isButton()) {
			if(interaction.customId === "primary") {
				interaction.reply({ content: "Hey, you clicked me!", ephemeral: true})
			} // This did not console log the button because you have already return if it wasn't a slash command.
		}

		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
			/* Might cause console spam but use if you would like,
            console.log(`${interaction.user.tag} has executed the ${interaction.commandName} command in ${interaction.guild.name}.`);
			*/
		} catch (error) {
			await interaction.reply({ content: `There was an error while executing this command.\n\`\`\`js\n${error}\`\`\``, ephemeral: true}).catch(() => null);
			console.error(`Error executing ${interaction.commandName}.`);
			console.error(error);
		}
	},
};
