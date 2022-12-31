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
/*
    //-Waiting for the button to be clicked-//
    const filter = i => i.customId === 'primary' && i.user.id === interaction.user.id; // Will only respond to buttons with the "primary" custom id and the id of the person who ran the /button command.
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 }); // Time = the number of milliseconds to run the collector. After that time the button will not respond anymore.

    collector.on('collect', async i => {
       await i.reply({ content: 'You clicked me!', components: [], ephemeral: true }) // Replying to the button interaction.
   });
    collector.on('end', collected => console.log(`Collected ${collected.size} items.`)); // Console log how many times the button was clicked when the time is over.
    // This will also end if the bot is restarted. But you can make a button interaction event in events/interactionCreate.js that has no timer and will continue even if restarted.
    */
  },
};