const config = {
	content: [
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	darkMode: 'class',
	plugins: [require('@tailwindcss/forms'), require('@skeletonlabs/skeleton/tailwind/theme.cjs')]
};

module.exports = config;
