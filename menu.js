import { SlashCommandBuilder } from '@discordjs/builders'

export default {

data: new SlashCommandBuilder()
		.setName('menu')
		.setDescription('Create a menu'),
    async execute(interaction) {
        await interaction.reply(`Menu`);
    },
};
