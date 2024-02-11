<script>
	import herobg from '$lib/images/hero-bg-img.png';
	import heroimg from '$lib/images/hero-img.png';
	import gugutLogo from '$lib/images/logo.svg';
	import abyssiniaLogo from '$lib/images/abyssinia-logo.png';
	import lumepad from '$lib/images/lume-pad.png';
	import cameras from '$lib/images/cameras.jpg';
	import laptop from '$lib/images/laptops.jpg';
	import phone from '$lib/images/phone.jpg';
	import lumepadavif from '$lib/images/lume-pad.avif';
	import herobgimgwebp from '$lib/images/hero-bg-img.webp';
	import herobgimgavif from '$lib/images/hero-bg-img.avif';
	import lumepadwebp from '$lib/images/lume-pad.webp';
	let showIframe = false;

	function toggleIframe() {
		showIframe = !showIframe;
		console.log(showIframe);
	}
</script>

{#if showIframe}
<div
	class="px-8 fixed z-50 top-0 left-0 w-full h-screen bg-gugut-bg/[0.80] backdrop-blur backdrop-saturate-200 shadow-lg"
>
	<button on:click={toggleIframe} class="text-white absolute top-8 right-8 transform -translate-x-1/2"
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
		src="https://www.youtube.com/embed/jZ82sqSP8-0?si=cYds3dd81Vgw88MU&amp;autoplay=1"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	></iframe>
</div>
{:else}


<div class="bg-[#05020D] relative">
	<div class="flex px-8 md:px-12 lg:px-4 lg:py-24 pt-40 flex-col items-center gap-4 relative z-0">
		<button
			on:click={toggleIframe}
			class="bounce absolute top-1/4 md:left-1/2 transform -translate-x-1/2 hover:cursor-pointer w-[89px] h-[89px] rounded-full svelte-9ghhzl"
			><svg
				class=" relative z-10"
				xmlns="http://www.w3.org/2000/svg"
				width="89"
				height="89"
				fill="none"
				><g filter="url(#filter0_b_79_186)"
					><circle cx="44.1506" cy="44.15" r="44.15" fill="white" fill-opacity="0.7"></circle></g
				><path
					d="M31.6512 31.1602C31.6512 27.3112 35.8179 24.9056 39.1512 26.8301L61.6512 39.8205C64.9846 41.745 64.9846 46.5562 61.6512 48.4807L39.1512 61.4711C35.8179 63.3956 31.6512 60.99 31.6512 57.141L31.6512 31.1602Z"
					fill="white"
				></path><defs
					><filter
						id="filter0_b_79_186"
						x="-3.99939"
						y="-4"
						width="96.3"
						height="96.3"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
						><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur
							in="BackgroundImageFix"
							stdDeviation="2"
						></feGaussianBlur><feComposite
							in2="SourceAlpha"
							operator="in"
							result="effect1_backgroundBlur_79_186"
						></feComposite><feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_backgroundBlur_79_186"
							result="shape"
						></feBlend></filter
					></defs
				></svg
			>
			<div
				class="w-10 h-10 rounded-full shadow-xl shadow-primary-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			></div></button
		>

		<picture
			><source
				srcset="{herobgimgavif} 1x, {herobgimgavif} 2x"
				type="image/avif"
			/><source
				srcset="{herobgimgwebp} 1x, {herobgimgwebp} 2x"
				type="image/webp"
			/><source
				srcset="{herobg} 1x,{herobg} 2x"
				type="image/png"
			/>
			<img
				class="absolute -z-10 top-0 left-0 object-cover"
				src={herobg}
				alt="LumPad 2.0 tablet"
				width="1440"
				height="1308"
			/></picture
		>

		<div class="flex flex-col items-center">
			<img src={heroimg} alt="LumPad 2.0 tablet" />
			<div class="flex flex-col items-center text-white">
				<div class="flex">
					<h1 class="text-[40px] md:text-[64px] !leading-normal font-medium relative">
						LUME PAD
						<span class="text-3xl font-semibold leading-loose absolute">2</span>
					</h1>
				</div>
				<h1 class="font-nova text-[64px] md:text-7xl">GIVEAWAY</h1>
			</div>
		</div>

		<div class="flex flex-col p-3 items-center gap-8 md:gap-12 max-w-[645px]">
			<p class="text-sm md:text-xl leanding-[28px] text-white/40 font-normal text-center">
				Gugut Podcast and Abyssinia Computech™ are excited to offer you a chance to win a brand new
				Lume Pad. A glasses-free 3D Android tablet powered by AI.
			</p>

			<a href="game.html#GUGUTGIVEAWAY" class="animate-bounce flex justify-center gap-2"
				><span class="text-sm md:text-xl leanding-[28px] text-white/40 font-normal text-center"
					>Scroll down to Win!
				</span>
				<span class=""
					><svg
						class=""
						width="21"
						height="24"
						viewBox="0 0 21 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g id="Outline/Interface/Caret down"
							><path
								id="Icon"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M20.2078 12.0778C20.8355 12.7055 20.8355 13.7231 20.2078 14.3507L11.6364 22.9221C11.0088 23.5497 9.99119 23.5497 9.36356 22.9221L0.792132 14.3507C0.164504 13.7231 0.164504 12.7055 0.792132 12.0778C1.41976 11.4502 2.43735 11.4502 3.06498 12.0778L10.5 19.5128L17.935 12.0778C18.5626 11.4502 19.5802 11.4502 20.2078 12.0778Z"
								fill="white"
								fill-opacity="0.4"
							></path><path
								id="Icon_2"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M20.2078 1.07784C20.8355 1.70547 20.8355 2.72305 20.2078 3.35068L11.6364 11.9221C11.0088 12.5497 9.99119 12.5497 9.36356 11.9221L0.792132 3.35068C0.164504 2.72305 0.164504 1.70547 0.792132 1.07784C1.41976 0.45021 2.43735 0.45021 3.06498 1.07784L10.5 8.51285L17.935 1.07784C18.5626 0.45021 19.5802 0.45021 20.2078 1.07784Z"
								fill="white"
								fill-opacity="0.4"
							></path></g
						></svg
					></span
				></a
			>

			<div class="px-3 flex flex-col items-center max-w-sm">
				<button
					class="w-full rounded-full border-2 border-white/30 px-6 py-2 bg-white text-sm md:text-base"
					>Shop at Abyssinia Computech™
				</button>
			</div>
		</div>

		<div class="flex flex-col gap-3 items-center pt-28">
			<div class="flex justify-between w-80">
				<img width="100" height="100" src={gugutLogo} alt="Gugut Podcast logo" />

				<div class="bg-white w-[1px] self-stretch"></div>
				<img width="100" height="100" src={abyssiniaLogo} alt="Abyssinia Computech™ logo" />
			</div>
		</div>
	</div>

	<div class="px-8 md:px-12 py-24 flex flex-col gap-4 md:gap-8 items-center max-w-6xl mx-auto">
		<div class="flex flex-col gap-5 md:gap-24 items-center pb-8 md:pb-20">
			<div class="text-xl md:text-[52px] font-semibold text-white md:leading-[79.5px] text-center">
				<h1>Gugut Podcast x Abyssinia Computech™</h1>
				<h1>🎉 A Chance to Win a Lume Pad! 🎉</h1>
			</div>

			<p
				class="text-base md:text-3xl leanding-[56.5px] text-white/40 font-normal text-left max-w-5xl"
			>
				Welcome to the Lume Pad Giveaway! Gugut Podcast and Abyssinia Computers are excited to offer
				you a chance to win a brand new Lume Pad. This glass-free 3D Android tablet is packed with
				flagship specs, including a fingerprint sensor, USB-C fast charging, SD card storage
				extension, and enhancing accessories. With built-in stereoscopic cameras, you can capture
				the world around you like never before, with pictures up to 5K resolution.
			</p>
		</div>

		<div class="px-8">
			<picture
				><source srcset="{lumepadavif} 1x, {lumepadavif} 2x" type="image/avif" /><source
					srcset="{lumepadwebp} 1x, {lumepadwebp} 2x"
					type="image/webp"
				/><source srcset="{lumepad} 1x, {lumepad} 2x" type="image/png" />
				<img src={lumepad} alt="LumPad 2.0 tablet" width="970" height="600" /></picture
			>
		</div>
		<div class="flex justify-center text-white gap-2 items-center">
			<a href="https://www.leiainc.com/" target="_blank" class="underline">More about Lume Pad </a>
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					><path
						d="M9.75 4.75L13.25 8M13.25 8L9.75 11.25M13.25 8H2.75"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path></svg
				></span
			>
		</div>
	</div>

	<div
		class=""
		style="background: linear-gradient(180deg, #05020D 0%, #17091B 37.26%, #05020D 100%);"
	>
		<div class="px-8 py-24 gap-4 md:gap-8 flex flex-col items-center max-w-6xl mx-auto">
			<div class="pb-24 flex flex-col items-center gap-6 md:gap-14">
				<h1 class="text-white text-xl md:text-5xl">Abyssinia Computech™</h1>
				<p
					class="text-base md:text-xl leanding-[28px] text-white/40 font-normal text-center max-w-[748px]"
				>
					Shop high-end Laptops, Desktop PC, Tablets, Gaming &amp; PC Components at The Ultimate
					Computer Store in Ethiopia.
				</p>
				<img width="300" height="300" src={abyssiniaLogo} alt="abyssinia logo" />
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
				<div
					style="background: rgba(217, 217, 217, 0.10);"
					class="py-5 px-4 flex flex-col items-center gap-4 rounded-xl"
				>
					<div class="w-full h-[344px] rounded-2xl">
						<img
							src={cameras}
							alt="phone"
							width="344"
							height="344"
							class="w-[344px] h-[344px] rounded-2xl object-cover"
						/>
					</div>
					<p class="text-xl text-white">Cameras</p>
				</div>
				<div
					style="background: rgba(217, 217, 217, 0.10);"
					class="py-5 px-4 flex flex-col items-center gap-4 rounded-xl"
				>
					<div class="w-full h-[344px] rounded-2xl">
						<img
							src={laptop}
							alt="phone"
							width="344"
							height="344"
							class="w-[344px] h-[344px] rounded-2xl object-cover"
						/>
					</div>
					<p class="text-xl text-white">High-end Laptops</p>
				</div>
				<div
					style="background: rgba(217, 217, 217, 0.10);"
					class="py-5 px-4 flex flex-col items-center gap-4 rounded-xl"
				>
					<div class="w-full h-[344px] rounded-2xl">
						<img
							src={phone}
							alt="phone"
							width="344"
							height="344"
							class="w-[344px] h-[344px] rounded-2xl object-cover"
						/>
					</div>
					<p class="text-xl text-white">Phone and Gadgets</p>
				</div>
			</div>
			<div class="flex justify-center text-white pt-16">
				<div class="px-1 py-1 rounded-full border-white border">
					<a href="https://t.me/abyssiniashop" class="bg-blue-400 px-4 py-2 rounded-full flex gap-4"
						><span class="ml-1">Browse More on telegram</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							class="h-6 w-6 inline-block rotate-45"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
							></path></svg
						></a
					>
				</div>
			</div>
		</div>
	</div>

	<div
		id="GUGUTGIVEAWAY"
		class="px-8 md:px-16 flex flex-col items-center py-24 gap-4 max-w-6xl mx-auto relative"
	>
		<div
			class="rounded-lg absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold sm:opacity-0 sm:hover:opacity-100 transition-opacity duration-200"
			style="background: linear-gradient(to bottom, rgba(255, 165, 0, 0.9), rgba(0, 0, 0, 0.9));"
		>
			<span class="px-4">🎉 Thanks for participating! See you next time! 🎉</span>
		</div>
		<div class="flex pb-16 flex-col gap-7 items-center">
			<h1 class="text-white text-2xl md:text-5xl font-semibold">🔗 How to Participate</h1>
			<p
				class="text-base md:text-xl leanding-[28px] text-white/40 font-normal text-center max-w-[748px]"
			>
				Entering the giveaway is a breeze! Simply follow these steps to unlock your chance to win
				the Lume Pad:
			</p>
		</div>

		<div class="max-w-5xl mx-auto">
			<ol
				class="list-decimal text-white/60 text-base sm:text-lg md:text-3xl font-normal flex flex-col gap-9"
			>
				<li>
					🎁 Stay up-to-date with Abyssinia Computers: Be a member of Abyssinia Computer’s Telegram
					channel to discover the latest technology and trends in the industry.
					<a
						href="https://t.me/abyssiniashop"
						target="_blank"
						class="text-lg text-primary-500 underline">Join Abyssinia Computech™ on Telegram</a
					>
				</li>
				<li>
					🎧 Listen to Gugut Podcast: Tune in to Gugut Podcast, and subscribe to our socials:
					<a
						class="text-primary-500 underline"
						href="https://www.instagram.com/gugutpodcast/"
						target="_blank">Instagram</a
					>,
					<a
						class="text-primary-500 underline"
						href="https://www.tiktok.com/@gugutpodcast"
						target="_blank">TikTok</a
					>,
					<a class="text-primary-500 underline" href="https://x.com/gugutpodcast" target="_blank"
						>Twitter
					</a>, and
					<a
						class="text-primary-500 underline"
						href="https://www.youtube.com/@Gugutpodcast"
						target="_blank">YouTube</a
					>
				</li>
				<li>
					📱 Post content on your favorite social media platform about Gugut Podcast and Abyssinia
					Computech. It can be a video, a photo, a tweet, a linkedin post, or a story. Be creative!
					🤩
				</li>
				<li>
					Add the hashtag <span class="text-[#00F0FF]">#GugutPodcastAbyssiniaComputech</span>.
				</li>

				<li>
					Tag (mention) <span class="text-[#00F0FF]">@gugutpodcast</span> account in your post.
				</li>

				<li>
					🎁 Finally: Fill the form below and stay-up to-date. The winner will be announced on Dec
					31, 2023. 🎉
				</li>
			</ol>

			<form method="POST" class="max-w-4xl mx-auto flex flex-col items-center pt-10 gap-8">
				<div class="w-full md:max-w-[600px] flex gap-4 flex-col items-center">
					<input
						class="w-full border-2 border-white/40 bg-white/[0.06] text-gray-200 p-3 rounded-lg focus:outline-none focus:shadow-outline"
						type="text"
						name="email"
						placeholder="Email Address"
					/>
					<span class="text-white">OR</span>
					<input
						class="w-full border-2 border-white/40 bg-white/[0.06] text-gray-200 p-3 rounded-lg focus:outline-none focus:shadow-outline"
						type="text"
						name="telegram_username"
						placeholder="Telegram Username"
					/>
				</div>
				<div class="w-full text-center">
					<button type="submit" class="bg-white px-6 py-3 rounded-full font-semibold">Submit</button
					>
				</div>
			</form>
		</div>
	</div>

	<div class="w-full text-center text-[52px] text-white py-16"><p>Good Luck🤞</p></div>
</div>
{/if}
