<script>
	export let link;
	
	let novel="";
	novel = link.split("gugut/")[1];
	console.log(novel)
</script>

<div
	class="fixed bottom-0 left-0 right-0 z-10 p-4 bg-gugut-bg/80 border-t-2 border-t-gugut-text/80 shadow-lg backdrop-blur"
	style=""
>
	<iframe
		src="https://podcasters.spotify.com/pod/show/gugut/embed/{novel}"
		class="h-40 mb-0 w-full"
		frameborder="0"
		scrolling="no"
		title="selam selam new"
	></iframe>
</div>
