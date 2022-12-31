const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { getCode, clean } = require("@elara-services/eval-helper");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Evaluates Javascript code in a command!")
    .addStringOption(option =>
        option.setName("code")
        .setDescription("Please enter the code to evaluate.")
        .setRequired(true)),

  async execute(interaction) {
    const input = interaction.options.getString('code');
    if (!config.developers.includes(interaction.user.id)) return interaction.reply({ content: ":x: Only the developers can run this command.", ephemeral: true }); 
        try {
            const evaled = await getCode({ code: input });
            const code = await clean(eval(evaled), [ client.token ]);
            const embed = new EmbedBuilder()
            .setColor("#00ff00")
            .setTitle("Successfully evaluated.")
            .addFields({ name: "Input", value: `\`\`\`js\n${input}\`\`\`` })
            .addFields({ name: "Output", value: `\`\`\`js\n${code}\`\`\`` })
        return interaction.reply({ embeds: [embed] });
        } catch (e) {
            return interaction.reply(`:x: There was an error during evaluation.\n\`\`\`js\n${e}\`\`\``)
        }
  },
};