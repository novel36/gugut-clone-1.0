<script>
	import gugutLogo from '$lib/images/logo.svg';
	import anchorlogo from '$lib/images/anchor-hero.svg';
	import youtubelogo from '$lib/images/yt-hero.svg';
	import applepodcast from '$lib/images/apple-podcast.svg';
	import googlepodcast from '$lib/images/google-podcast.svg';
	import spotifypodcast from '$lib/images/spotify.svg';
	import teraki from '$lib/images/teraki.svg';
	import play from '$lib/images/play.svg';
	// @ts-ignore
	import stop from '$lib/images/stop.svg';
	// @ts-ignore
	import episodeplay from '$lib/images/episode-play.svg';
	// @ts-ignore
	import date from '$lib/images/date.svg';
	import AudioEpisodeComponent from './component/AudioEpisodeComponent.svelte';
	import EpisodeCard from './component/EpisodeCard.svelte';
	import VideoPlayer from './VideoPlayer.svelte';
	import { isAudioPlaying, link } from './playaudio';
	
	
	/**
	 * @type {any}
	 */
	let playaudio;
	// @ts-ignore
	/**
	 * @type {any}
	 */
	let playYoutubeLink;
	// @ts-ignore
	/**
	 * @type {null}
	 */
	let currentlyPlaying;

	// @ts-ignore
	export let data;
	let isvideoplaying = false;
	/**
	 * @param {any} params
	 */
	function videoplaying(params) {
		console.log(params.detail);
		isvideoplaying = params.detail;
	}
	/**
	 * @param {{ detail: boolean; }} params
	 */
	function onVideoPlaying(params) {
		// console.log(params.detail.isvideoplaying);
		// console.log(params.detail.youtubelink);
		// @ts-ignore
		isvideoplaying = params.detail.isvideoplaying;
		// @ts-ignore
		playYoutubeLink = params.detail.youtubelink;
	}
	// @ts-ignore
	function togglePlayback(itemId, audioLink) {
		// @ts-ignore
		if (currentlyPlaying === itemId) {
			$link="";
			currentlyPlaying = null;
			$isAudioPlaying = false;
			console.log(audioLink);
		} else {
			$isAudioPlaying = true;
			$link=audioLink;
			console.log(audioLink);
			$isAudioPlaying = true;

			currentlyPlaying = itemId;
			
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
{#if isvideoplaying}
	<VideoPlayer on:videoplaying={videoplaying} youtubelink={playYoutubeLink} />
{:else}
	<section>
		<section class="w-full">
			<div class="flex md:flex-row flex-col py-14 bg-gugut-bg">
				<div class="lg:px-28 md:px-20 sm:px-16 px-8 md:order-none order-2">
					<p
						class="mt-24 font-bold lg:text-5xl md:text-4xl text-3xl lg:leading-[69px] leading-[50px] text-white"
					>
						Thought-Provoking Conversations and Entertaining Stories
					</p>
					<p class="mt-6 font-normal text-sm text-white">
						Gugut is an entertainment/educational podcast focused on discussing different
						perspectives on philosophy and the day-to-day lives of everyday people.
					</p>
					<div class="grid sm:grid-cols-2 mt-20 gap-4 items-center">
						<div
							class="bg-gradient-to-r from-hero-btn-bg to-hero-btn-bg-2 w-full md:w-[166px] h-[46px] text-center rounded-[30px] flex items-center justify-center svelte-o4oy8h"
						>
							<a
								title="gugut podcast youtube channel"
								href="https://www.youtube.com/c/gugutpodcast"
								target="_blank"
								class="text-white w-full"
							>
								Start Listening
							</a>
						</div>
					</div>
					<div class="flex mt-20">
						<img src={anchorlogo} class="pr-5 w-auto h-auto" alt="Gugut Logo" />
						<img src={youtubelogo} class="sm:pl-5 sm:pt-0 pt-8 w-auto h-auto" alt="Gugut Logo" />
					</div>
				</div>
				<div
					class="relative z-0 md:w-full self-center xl:ml-32 md:mx-20 md:order-none order-1 md:mt-0 mt-16"
				>
					<div
						class="lg:w-72 lg:h-72 md:w-60 md:h-60 w-56 h-56 rounded-full shadow-hero-shadow svelte-o4oy8h"
					></div>
					<img
						src={gugutLogo}
						class="absolute inset-0 lg:w-80 lg:h-80 md:w-72 md:h-72 w-60 h-60 object-cover rounded-2xl"
						alt="Gugut Logo"
					/>
				</div>
			</div>

			<div
				class="lg:flex grid sm:grid-cols-2 grid-cols-1 sm:justify-items-start justify-items-center content-center justify-between lg:px-28 md:px-20 sm:px-16 px-8 py-28 bg-[#292929]"
			>
				<a
					title="gugut podcast spotify account"
					href="https://open.spotify.com/show/3NTPFr3pazZX4wSgQOZv2g?si=76b7351888d046ec"
					target="_blank"
				>
					<img
						src={spotifypodcast}
						alt="Spotify"
						class="md:w-auto sm:w-36 w-auto h-auto hover:scale-105 hover:transition"
					/></a
				>
				<a
					title="gugut podcast google podcast account"
					href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NDQ5MWE0OC9wb2RjYXN0L3Jzcw"
					target="_blank"
				>
					<img
						src={googlepodcast}
						alt="Google podcast"
						class="md:w-auto sm:w-48 w-auto h-auto sm:mt-0 mt-16 hover:scale-105 hover:transition"
					/></a
				>
				<a
					title="gugut podcast apple podcast account"
					href="https://podcasts.apple.com/us/podcast/gugut-podcast/id1560758557"
					target="_blank"
				>
					<img
						src={applepodcast}
						alt="Apple podcast"
						class="lg:mt-0 mt-16 md:w-auto sm:w-48 w-auto h-auto hover:scale-105 hover:transition"
					/></a
				>
				<a
					title="gugut podcast teraki account"
					href="https://terakiapp.page.link/8vBUfKsq5FFwYxLdA"
					target="_blank"
				>
					<img
						src={teraki}
						alt="Teraki"
						class="lg:mt-0 mt-16 md:w-auto sm:w-36 w-auto h-auto hover:scale-105 hover:transition"
					/></a
				>
			</div>
			<div class="">
				<div class="relative">
					<img
						src="https://i.ytimg.com/vi/2fzk1MgYsP0/maxresdefault.jpg"
						class="h-full w-full object-cover"
						alt="Gugut Latest Episode"
					/>
					<div class="absolute inset-0 bg-gugut-gradient">
						<div class="absolute inset-0 grid pointer-events-none">
							<a
								title="latest gugut podcast episode on youtube"
								href="https://www.youtube.com/watch?v=2fzk1MgYsP0"
								class="place-self-center"
								target="_blank"
								><img
									class="sm:h-full sm:w-full h-16 w-16 pointer-events-auto hover:cursor-pointer rounded-full hover:scale-105 hover:transition hover:backdrop-blur hover:backdrop-saturate-200 hover:shadow-xl"
									src={play}
									alt="Play Button| link to episode page"
								/></a
							>
						</div>
						<div class="lg:block hidden">
							<h1
								class="text-gugut-text text-sm font-bold xl:pt-[27rem] pt-[22rem] lg:px-28 md:px-20 sm:px-16 px-8 uppercase"
							>
								Latest Episode
							</h1>
							<h1
								class="lg:px-28 md:px-20 sm:px-16 px-8 xl:text-4xl w-1/2 text-3xl font-semibold tracking-wide text-white pt-4"
							>
								ሀገር በቀል የMap አገልግሎት | Bemhreth Gezahegn | Gebeta Maps
							</h1>
							<p
								class="line-clamp-2 lg:line-clamp-2 xl:line-clamp-3 lg:max-w-xl lg:pl-28 lg:px-0 md:px-20 sm:px-16 px-8 xl:pt-8 pt-6 text-white/80 font-light tracking-wide leading-7"
							>
								In this insightful interview, we delve into the journey of Gebeta maps, a prominent
								provider of mapping and location-based services. Join us as we hear from the
								company's owner, who opens up about his experience studying at AASTU and sheds light
								on the captivating beginnings of Gebeta maps as a food delivery company during his
								university years. This video is a must-watch for aspiring entrepreneurs and
								individuals intrigued by the evolution of tech-based startups. 0:00 Intro 2:59 What
								is mapping service 8:45 How it all started 17:42 Telegram bot map 23:30 Working
								culture 1:01:58 Managing the cost and investments 1:03:22 Future plans 1:09:59 Life
								in AASTU 1:11:41 What helped them get to this point 1:14:29 Running a startup and
								social life 1:18:04 Outro Gugut is an entertainment/educational podcast which is
								focused on discussing different perspectives on technology, philosophy and
								day-to-day lives of everyday people. For any inquiries 👇👇👇 🌐
								https://www.gugutpodcast.com/inquiries Follow us here 👨‍🦯👨‍🦯 Website:
								https://www.gugutpodcast.com/ Instagram: https://www.instagram.com/gugutpodcast/
								TIkTok: https://www.tiktok.com/@gugutpodcast Telegram: https://t.me/gugutpodcast
								Telegram Fan Page: https://t.me/gugutpodcastfanpage Anchor: https://anchor.fm/gugut
								Spotify: https://open.spotify.com/show/3NTPFr3pazZX4wSgQOZv2g
							</p>
							<a
								title="latest gugut podcast episode on youtube"
								href="https://www.youtube.com/watch?v=2fzk1MgYsP0"
								target="_blank"
								><p
									class="underline max-w-lg lg:pl-28 md:pl-20 pl-16 pt-3 text-white font-light tracking-wide hover:tracking-wider leading-9 hover:cursor-pointer"
								>
									See Episode
								</p></a
							>
						</div>
					</div>
				</div>
				<div class="lg:hidden block bg-gugut-bg">
					<h1
						class="text-gugut-text text-sm font-bold pt-12 lg:px-28 md:px-20 sm:px-16 px-8 uppercase"
					>
						Latest Episode
					</h1>
					<h1
						class="lg:px-28 md:px-20 sm:px-16 px-8 xl:text-4xl md:text-3xl text-2xl font-semibold tracking-wide text-white pt-4"
					>
						ሀገር በቀል የMap አገልግሎት | Bemhreth Gezahegn | Gebeta Maps
					</h1>
					<p
						class="line-clamp-2 lg:line-clamp-2 xl:line-clamp-4 lg:max-w-xl lg:pl-28 lg:px-0 md:px-20 sm:px-16 px-8 xl:pt-8 pt-6 text-white/80 font-light tracking-wide leading-7"
					>
						In this insightful interview, we delve into the journey of Gebeta maps, a prominent
						provider of mapping and location-based services. Join us as we hear from the company's
						owner, who opens up about his experience studying at AASTU and sheds light on the
						captivating beginnings of Gebeta maps as a food delivery company during his university
						years. This video is a must-watch for aspiring entrepreneurs and individuals intrigued
						by the evolution of tech-based startups. 0:00 Intro 2:59 What is mapping service 8:45
						How it all started 17:42 Telegram bot map 23:30 Working culture 1:01:58 Managing the
						cost and investments 1:03:22 Future plans 1:09:59 Life in AASTU 1:11:41 What helped them
						get to this point 1:14:29 Running a startup and social life 1:18:04 Outro Gugut is an
						entertainment/educational podcast which is focused on discussing different perspectives
						on technology, philosophy and day-to-day lives of everyday people. For any inquiries
						👇👇👇 🌐 https://www.gugutpodcast.com/inquiries Follow us here 👨‍🦯👨‍🦯 Website:
						https://www.gugutpodcast.com/ Instagram: https://www.instagram.com/gugutpodcast/ TIkTok:
						https://www.tiktok.com/@gugutpodcast Telegram: https://t.me/gugutpodcast Telegram Fan
						Page: https://t.me/gugutpodcastfanpage Anchor: https://anchor.fm/gugut Spotify:
						https://open.spotify.com/show/3NTPFr3pazZX4wSgQOZv2g
					</p>
					<a
						title="latest gugut podcast episode on youtube"
						href="https://www.youtube.com/watch?v=2fzk1MgYsP0"
						target="_blank"
						><p
							class="underline max-w-lg lg:pl-28 md:pl-20 sm:pl-16 pl-8 pt-3 text-white font-light tracking-wide hover:tracking-wider leading-9 hover:cursor-pointer"
						>
							See Episode
						</p></a
					>
				</div>
				<div class="bg-gugut-bg lg:px-28 md:px-20 sm:px-16 px-8 py-16">
					<div class="flex justify-between items-stretch lg:mt-0">
						<h1 class="font-normal text-white md:text-3xl text-2xl tracking-wide">More Episodes</h1>
						<a title="gugut podcast youtube account" href="https://www.youtube.com/c/gugutpodcast"
							><span
								class="text-gugut-text md:text-base text-sm underline tracking-wide font-normal self-center"
								>View</span
							></a
						>
					</div>
					<div class="grid md:grid-cols-3 sm:grid-cols-2 pt-10 -mr-4">
						{#each data.episodesCardData as item, i}
							<EpisodeCard cardData={item} on:videoplaying={onVideoPlaying} />
						{/each}

						<div class="pr-4 py-4">
							<div class="pr-4 py-4"></div>
						</div>
					</div>
					<div class="bg-gugut-bg lg:px-28 md:px-20 sm:px-16 px-8 pt-8 pb-44">
						<div class="flex justify-between items-stretch lg:mt-0">
							<h1 class="font-normal text-white md:text-3xl text-2xl tracking-wide">Audio</h1>
							<a
								title="Spotify for podcasters account of gugut podcast"
								href="https://podcasters.spotify.com/pod/show/gugut"
								target="_blank"
								><span
									class="text-gugut-text md:text-base text-sm underline tracking-wide font-normal self-center"
									>View</span
								></a
							>
						</div>
						<div class="pt-10">
							{#each data.episodes as item, i}
								<AudioEpisodeComponent
									audioInfo={item}
									itemId={i}
									currentlyPlaying={currentlyPlaying}
									togglePlayback={togglePlayback}
									audioLink={item.link}
								/>
							{/each}
						</div>
					</div>
					{#if playaudio}
						<div
							class="fixed bottom-0 left-0 right-0 z-10 p-4 bg-gugut-bg/80 border-t-2 border-t-gugut-text/80 shadow-lg backdrop-blur"
							style=""
						>
							<audio class="block w-full invert" controls={true} autoplay></audio><source
								src="https://anchor.fm/s/54491a48/podcast/play/81676390/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2024-0-23%2F364620341-44100-2-4aa2e58b44a9d.m4a"
								type="audio/x-m4a"
							/>
						</div>
					{/if}
				</div>
			</div>
		</section>
	</section>
{/if}

<style>
</style>
