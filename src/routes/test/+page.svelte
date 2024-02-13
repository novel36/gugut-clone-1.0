<script>
// @ts-nocheck

	import Playbutton from "./Playbutton.svelte";


    let items=[
    {
        name: 'Episode 1',
        id:1
    },
    {
        name: 'Episode 2',
        id:2
    },
    {
        name: 'Episode 3',
        id:3
    },
    
    ] ;
    // @ts-ignore
    let currentlyPlaying;

    // @ts-ignore
    function togglePlayback(itemID) {
        // @ts-ignore
        if (currentlyPlaying === itemID) {
            currentlyPlaying =null;
        } else {
            currentlyPlaying=itemID;
        }
    }
</script>

<div class="mt-12 h-screen flex flex-col justify-center items-center space-y-3">


{#each items as item}
     <!-- content here -->
     <Playbutton itemId={item.id} currentlyPlaying={currentlyPlaying} togglePlayback={togglePlayback}/>
{/each}
</div>
