<script>
	import './styles.css';
    import "../app.css";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { isAudioPlaying, link } from './playaudio';
	import AudioPlayer from './audioPlayer.svelte';
</script>
<svelte:head>
	<title>Gugut Podcast</title>
</svelte:head>

<div class="app">
	<Header/>
	<main>
		<slot />
	</main>
	<Footer/>
	{#if $isAudioPlaying}
		<AudioPlayer link={$link}/>
	{/if}
</div>

