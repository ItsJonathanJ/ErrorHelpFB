import { SlashCommandBuilder } from '@discordjs/builders'

export default {

data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Select a member and kick them (but not really).')
		.addUserOption(option => option.setName('target').setDescription('The member to kick'))
		.setDefaultPermission(false),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply({ content: `You wanted to kick: ${user.username}`, ephemeral: true });
	},
};
