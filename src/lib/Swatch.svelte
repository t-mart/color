<script lang="ts">
	import { fade } from 'svelte/transition';
	export let color: string;

	const hashColor = `#${color}`;
    let copyTooltipVisible = false;

	function copyToClipboard(
		color: string,
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) {
		navigator.clipboard.writeText(`#${color}`).then(() => {
            copyTooltipVisible = true;
            window.setTimeout(() => {
                copyTooltipVisible = false;
            }, 1500);
        });
	}
</script>

<button on:click={(e) => copyToClipboard(color, e)} class="flex flex-col items-center relative gap-y-2 hover:underline">
	<div style="background-color: #{color}" class="h-10 w-10 rounded"></div>
	<p class="font-mono text-xs">#{color}</p>
    {#if copyTooltipVisible}
        <div class="absolute bottom-full mb-2">
            <p class="bg-gray-100 text-gray-900 text-xs py-1 px-2 rounded">Copied!</p>
        </div>
    {/if}
</button>
