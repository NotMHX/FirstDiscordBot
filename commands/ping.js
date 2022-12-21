const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Tests if the bot is working."),

  async execute(interaction) {
    await interaction.reply(
      `I feel alive! I'm in the server ${interaction.guild.name}, right?`
    );
  },
};
