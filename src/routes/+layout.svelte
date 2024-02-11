<script>
	import './styles.css';
    import "../app.css";
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
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
	
</div>

