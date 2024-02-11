<script>
	let navopen = false;
	function toggleOpen() {
		navopen = !navopen;
		console.log(navopen);
	}
</script>

<header
	class="sticky top-0 z-10 w-full h-20
  shadow-lg -mb-20 bg-gugut-bg/[0.80]
  backdrop-blur backdrop-saturate-200 flex
  justify-between items-center
  lg:px-28 md:px-20 sm:px-16 px-8"
>
	<div class=" font-bold text-white lg:text-xl text-base hover:cursor-pointer">
		<a title="Home page of gugut podcast website" href="/" class="flex">
			<div class="text-gugut-text">GUGUT</div>
			<div class="text-secondary-500">PODCAST</div>
		</a>
	</div>
	<div>
		<nav class="hidden mmd:block">
			<ul class="flex justify-between llg:w-[28rem] lg:w-[25rem] w-[23rem]">
				<li class="hover:scale-105 hover:transition">
					<a
						href="/about-us"
						title="Go to about gugut page"
						class="llg:text-sm text-xs font-semibold text-white/80 hover:text-white">ABOUT US</a
					>
				</li>
				<li class="hover:scale-105 hover:transition">
					<a
						href="/game"
						title="Go to game page"
						class="llg:text-sm text-xs font-semibold text-white/80 hover:text-white">GIVEAWAY</a
					>
				</li>
				<li class="hover:scale-105 hover:transition">
					<a
						href="/inquiries"
						title="Go to inquiries form page "
						class="llg:text-sm text-xs font-semibold text-white/80 hover:text-white">INQUIRIES</a
					>
				</li>
			</ul>
		</nav>
	</div>
	<div class="relative group hidden mmd:inline-flex">
		<div
			class="animate-pulse absolute transition-all duration-1000 opacity-100 -inset-px bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
		></div>
		<a
			href="https://www.jami.bio/gugutpodcast"
			title="ሻይ ጋብዙን!"
			class="relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-gugut-bg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
		>
			🍵 ሻይ ጋብዙን!
		</a>
	</div>
	<div class="mmd:hidden block">
		<span class="text-gugut-text"
			><div>
				<button class="relative group" on:click={toggleOpen}>
                    {#if navopen}
                         <!-- content here -->
                         <div
						class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200"
					>
						<div
							class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"
						>
							<div
								class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10"
							></div>
							<div
								class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 translate-x-10 delay-75"
							></div>
							<div
								class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left translate-x-10 delay-150"
							></div>
							<div
								class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 translate-x-0 w-12 flex w-0"
							>
								<div
									class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-45 delay-300"
								></div>
								<div
									class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 -rotate-45"
								></div>
							</div>
						</div>
					</div>
                    {:else}
                    <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200"><div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden"><div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left "></div> <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300  delay-75"></div> <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left  delay-150"></div> <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10  flex w-0"><div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300"></div> <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 delay-300 -rotate-0"></div></div></div></div>
                    {/if}
					
				</button>
			</div></span
		>
	</div>
	{#if navopen}
		<!-- content here -->
		<div
			class="mmd:hidden block absolute mt-[23rem] sm:right-16 right-8 w-60 bg-[#363636]/90 backdrop-blur backdrop-saturate-200 shadow-lg rounded-md"
		>
			<nav class="grid justify-items-stretch">
				<ul class="grid justify-items-center">
					<li class="pt-6 hover:scale-105 hover:transition">
						<a
							href="/about-us"
							title="Go to about gugut page"
							class="text-sm font-semibold text-white">ABOUT US</a
						>
					</li>
					<li class="pt-6 hover:scale-105 hover:transition">
						<a href="/game" title="Go to game page" class="text-sm font-semibold text-white"
							>GIVEAWAY</a
						>
					</li>
					<li class="pt-6 hover:scale-105 hover:transition">
						<a
							href="/inquiries"
							title="Go to inquiries page"
							class="text-sm font-semibold text-white">INQUIRIES</a
						>
					</li>
				</ul>
				<div class="text-base font-semibold pt-8 pb-10 justify-self-center rounded-b-md">
					<div class="relative group">
						<div
							class="animate-pulse absolute transition-all duration-1000 opacity-100 -inset-px bg-gradient-to-r from-primary-500 via-secondary-500 to-secondary-500 rounded-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
						></div>
						<a
							href="https://www.jami.bio/gugutpodcast"
							title="ሻይ ጋብዙን!"
							class="relative inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-white transition-all duration-200 bg-gugut-bg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							>🍵 ሻይ ጋብዙን!</a
						>
					</div>
				</div>
			</nav>
		</div>
	{/if}
</header>
