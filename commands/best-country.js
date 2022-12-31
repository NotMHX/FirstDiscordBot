const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("best-country")
    .setDescription("What's the best country in the world?")
    .addStringOption(option =>
		option.setName('country')
			.setDescription('Country name')
      .setRequired(true)),

  async execute(interaction) {
    const country = interaction.options.getString('country').toLowerCase();
    
    if (country === "england") {
      await interaction.reply(`All right bruv you are CORRECT!`);
    } else {
      await interaction.reply(`Stinky American.`); //Very offensive to me since I'm a American.
    }  
  },
};