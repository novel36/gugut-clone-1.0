<script>
// @ts-nocheck
    import date from '$lib/images/date.svg';
    import episodeplay from '$lib/images/episode-play.svg';
	import { createEventDispatcher } from 'svelte';
    export let cardData;
    export let videoplaying=false;
    const dispatch = createEventDispatcher();
	function toggleIframe() {
		videoplaying = !videoplaying;
		// console.log(videoplaying);
        dispatch("videoplaying",{
            isvideoplaying : videoplaying,
		youtubelink : cardData.linkhref,
        });
	}

</script>
<!-- 
     title={cardData.linktitle}
        href={cardData.linkhref}
 -->
<div class="pr-4 py-4">
    <button
       on:click={toggleIframe}
        ><img
            src={cardData.imgsrc}
            class="aspect-video rounded-xl mb-7 w-full object-cover hover:scale-105 hover:transition hover:cursor-pointer"
            alt="thumbnail"
        />

        <span
            class="xl:text-lg md:text-base text-xl font-normal tracking-wide text-white pl-2 line-clamp-1 overflow-y-hidden hover:scale-105 hover:transition hover:underline underline-offset-4"
            >{cardData.title}</span
        >
        <div class="flex justify-between mt-4 pl-2">
            <div class="flex items-stretch">
                <img
                    src={episodeplay}
                    alt="link to episode page"
                    class="self-center pr-3 xl:h-auto xl:w-auto lg:h-6 lg:w-6 md:h-5 md:w-5 md:w-auto h-5 w-5"
                />
                <span
                    class="self-center text-gugut-text xl:text-base lg:text-sm md:text-xs md:text-base text-xs tracking-wide font-normal hover:cursor-pointer hover:underline"
                    >Play This Episode
                </span>
            </div>
            <div class="flex items-stretch">
                <img
                    src={date}
                    alt="Date icon"
                    class="self-center opacity-70 pr-3 xl:h-6 xl:w-6 lg:h-6 lg:w-6 md:h-5 md:w-5 md:h-6 md:w-6 h-5 w-5"
                />	
                <span
                    class="self-center text-white/70 font-light xl:text-sm lg:text-xs md:text-xs md:text-sm text-xs"
                    >{cardData.date}</span
                >
            </div>
        </div></button
    >
</div>