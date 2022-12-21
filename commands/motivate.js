const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("movitvate")
    .setDescription("Tells you how great England is."),

  async execute(interaction) {
    await interaction.reply(`CAM OHN INGERLAND!!! **SCOAR SUM FACKEN GOULS!**`);
  },
};
