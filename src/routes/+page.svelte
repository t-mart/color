<script lang="ts">
	import _schemes from '../color.json';
	import SchemeDisplay from '$lib/SchemeDisplay.svelte';

	const schemes: Scheme[] = _schemes;
</script>

<div class="max-w-[70ch] mx-auto py-8">
	<main>
		<h1 class="text-4xl mb-8 font-bold">Color Schemes That I Seem To Keep Coming Back To</h1>

		<ol class="flex flex-col gap-6">
			{#each schemes as scheme (scheme.name)}
				<li>
					<SchemeDisplay {scheme} />
				</li>
			{/each}
		</ol>
	</main>

	<footer class="mt-8">
		<ol class="flex gap-4 justify-center">
			<li>by Tim Martin</li>
			<li><a href="https://github.com/t-mart/colors" class="link">source code</a></li>
		</ol>
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.900);
		color: theme(colors.gray.100);
	}
</style>
