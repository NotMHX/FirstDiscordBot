const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("Button test command"),

  async execute(interaction) {
    const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('primary')
				.setLabel('Click me!')
				.setStyle(ButtonStyle.Primary)

        );
    await interaction.reply({ content: 'What are you going to do?', components: [row]});
  },
};