<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import DrawerNav from '$lib/components/layout/DrawerNav.svelte';

	// TODO: https://github.com/sveltejs/kit/issues/2733
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	/** @type {HTMLElement} */
	let content;

	afterNavigate(() => {
		console.log('navigating');
		setTimeout(() => {
			content.scrollTo(0, 0);
		}, 0);
	});
</script>

<Drawer>
	<div class="flex flex-col">
		<div class="flex justify-end mt-4">
			<button class="btn btn-filled-primary btn-xl" on:click={() => drawerStore.close()}>X</button>
		</div>
		<DrawerNav />
	</div>
</Drawer>
<AppShell>
	<svelte:fragment slot="header">
		<TopNav />
	</svelte:fragment>
	<main class="flex-1">
		<slot />
	</main>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
