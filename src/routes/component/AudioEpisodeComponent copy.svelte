<script>
// @ts-nocheck

	import play from '$lib/images/play.svg';
	import stop from '$lib/images/stop.svg';
	export let playaudio = false;
	import { isAudioPlaying,link } from '../playaudio';
	function playAudioHandler() {
		playaudio = !playaudio;
		// console.log(playaudio);
		$isAudioPlaying=!$isAudioPlaying;
		$link =audioInfo.link;
		console.log("yes audio is playing" + $isAudioPlaying);
		console.log($link)
	}

	
	export let audioInfo;
</script>

<div class="flex mb-6 items-center">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		on:click={playAudioHandler}
		class="h-20 w-20 hover:cursor-pointer rounded-full hover:scale-105 hover:transition hover:backdrop-blur hover:backdrop-saturate-200 hover:shadow-lg"
		src={!playaudio ? play : stop}
		alt="Play Button| link to episode page"
	/>
	<div class="flex-1 overflow-x-auto ml-8">
		<div class="md:flex justify-between pb-2">
			<p class="text-white md:text-xl text-lg font-normal tracking-wide md:w-1/2 pb-2">
				{audioInfo.title}
			</p>
			<p class="text-white/60 leading-relaxed text-base font-light tracking-wider">
				{audioInfo.date}
			</p>
		</div>
		<p
			class="md:w-1/2 line-clamp-2 text-white/60 leading-relaxed text-base font-light tracking-wider"
		>
			{audioInfo.paragraph}
		</p>
		<p></p>
	</div>
</div>
<div class="h-[1px] bg-white w-full mb-6"></div>
