<script lang="ts">
    import { toValidHtmlId } from '$lib/util';
	import Swatch from './Swatch.svelte';

	export let scheme: Scheme;

    let schemeId = toValidHtmlId(scheme.name);
</script>

<div>
	<div class="flex gap-2 mb-4 items-baseline">
		<a href="#{schemeId}"><h2 class="text-2xl hover:underline" id={schemeId}>{scheme.name}</h2></a>
		<p class="text-sm">(<a href={scheme.sourceUrl} class="link">source</a>)</p>
	</div>
	<ol class="flex flex-row gap-4 flex-wrap">
		{#each scheme.colors as color}
			<li>
				<Swatch {color} />
			</li>
		{/each}
	</ol>
</div>
