<script>
	import { createEventDispatcher } from 'svelte';
	export let videoplaying = false;
	export let youtubelink="";
	const dispatch = createEventDispatcher();
	const videoId = youtubelink.split('=')[1]; 
	function toggleIframe() {
		videoplaying = !videoplaying;
		dispatch('videoplaying', videoplaying);
	}
	console.log(videoId);
</script>

<div
	class="px-8 fixed z-50 top-0 left-0 w-full h-screen bg-gugut-bg/[0.80] backdrop-blur backdrop-saturate-200 shadow-lg"
>
	<button
		on:click={toggleIframe}
		class="text-white absolute top-8 right-8 transform -translate-x-1/2"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class=""
			viewBox="0 0 16 16"
			><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path
				d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
			></path></svg
		></button
	>
	<iframe
		class="w-full md:w-[560px] h-[315px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
		src="https://www.youtube.com/embed/{videoId}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
</div>
