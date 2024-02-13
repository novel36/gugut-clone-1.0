
<script>
// @ts-nocheck

     export let itemId;
     export let currentlyPlaying;
     export let togglePlayback;
 </script>
 
 <button class="px-8 py-4 {currentlyPlaying===itemId ? "bg-red-500":"bg-blue-500"} bg-blue-500 rounded-md text-white text-lg" on:click={()=>{togglePlayback(itemId)}}>
     {#if currentlyPlaying === itemId }
     stop
     {:else}
     play
     {/if}
 </button>