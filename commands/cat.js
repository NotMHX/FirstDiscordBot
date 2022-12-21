const { SlashCommandBuilder } = require("discord.js");
const { request } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("gives you a random cat"),

  async execute(interaction) {
    await interaction.deferReply();
    const catResult = await request(`https://aws.random.cat/meow`);
    const { file } = await catResult.body.json();
    await interaction.editReply({ files: [file] });
  },
};
