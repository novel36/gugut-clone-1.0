<script>
	import instagram from '$lib/images/instagram.svg';
	import twitter from '$lib/images/twitter.svg';
	import linkedin from '$lib/images/linkedin.svg';
    import gugutTeamBiruk from '$lib/images/gugut-team-biruk.png';
    import gugutTeamBrook from '$lib/images/gugut-team-brook.png';
    import gugutTeamDagem from '$lib/images/gugut-team-dagem.png';
    import aboutbg from '$lib/images/about-bg.jpeg';
</script>

<div class="w-full text-white grid justify-items-stretch">
	<div class="relative">
		<div class="w-full pt-24 about-page-bg grid bg-gugut-gradient-2">
			<h1
				class="mt-16 mx-auto font-bold xl:text-5xl md:text-4xl text-3xl xl:leading-[69px] leading-[50px] text-white"
			>
				About Us
			</h1>
			<p
				class="mt-6 max-w-screen-lg mx-auto px-8 font-normal leading-7 tracking-wide text-base text-center text-white/80"
			>
				Welcome to Gugut Podcast - an entertaining and informative platform where you can join
				engaging conversations with local personalities, learn about relevant topics, and broaden
				your perspective on life. Our podcast began in 2020 amid a growing demand for locally
				focused content in Ethiopia. We strive to provide content that balances entertainment and
				education with a focus on real-life stories and practical insights.
			</p>
			<h1
				class="mt-16 mx-auto font-bold xl:text-5xl md:text-4xl text-3xl xl:leading-[69px] leading-[50px] text-white"
			>
				Team
			</h1>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:gap-16 lg:gap-14 md:gap-6 gap-10 pt-16 mb-28 lg:mx-20 md:mx-16 sm:mx-16 mx-8">
				<div
					class="about-bg w-full rounded-xl grid justify-items-stretch py-16 backdrop-blur backdrop-saturate-200 shadow-lg bg-gugut-gradient-3"
				>
					<img
						src={gugutTeamBiruk}
						alt="gugut-member-dp"
						class="mx-auto h-auto w-auto"
					/>
					<h1 class="mx-auto text-xl font-normal py-4">Biruk Tesfaye</h1>
					<div class="flex mx-auto">
						<a href="https://twitter.com/biruktesfayeve" class="px-4" target="_blank"
							><img src={twitter} alt="twitter-icon" class="h-5 w-5" />
						</a><a href="https://www.instagram.com/biruktesfayeve/" class="px-4" target="_blank"
							><img src={instagram} alt="instagram-icon" class="h-5 w-5" />
						</a><a href="https://www.linkedin.com/in/biruktesfayeve/" class="px-4" target="_blank"
							><img src={linkedin} alt="linkedin-icon" class="h-5 w-5" />
						</a>
					</div>
				</div>

				<div
					class="about-bg w-full rounded-xl grid justify-items-stretch py-16 backdrop-blur backdrop-saturate-200 shadow-lg bg-gugut-gradient-3"
				>
					<img
						src={gugutTeamBrook}
						alt="gugut-member-dp"
						class="mx-auto h-auto w-auto"
					/>
					<h1 class="mx-auto text-xl font-normal py-4">Brook Belihu</h1>
					<div class="flex mx-auto">
						<a href="https://twitter.com/brookisha_B97" class="px-4" target="_blank"
							><img src={twitter} alt="twitter-icon" class="h-5 w-5" />
						</a><a href="https://www.instagram.com/brookbelihu/" class="px-4" target="_blank"
							><img src={instagram} alt="instagram-icon" class="h-5 w-5" />
						</a><a href="https://www.linkedin.com/in/brookbelihu/" class="px-4" target="_blank"
							><img src={linkedin} alt="linkedin-icon" class="h-5 w-5" />
						</a>
					</div>
				</div>
				<div
					class="about-bg grid w-full rounded-xl md:col-span-1  justify-items-stretch py-16 backdrop-blur backdrop-saturate-200 shadow-lg bg-gugut-gradient-3"
				>
					<img
						src={gugutTeamDagem}
						alt="gugut-member-dp"
						class="mx-auto h-auto w-auto"
					/>
					<h1 class="mx-auto text-xl font-normal py-4">Dagem Mekonnen</h1>
					<div class="flex mx-auto">
						<a href="https://twitter.com/dagemmekonnen" class="px-4" target="_blank"
							><img src={twitter} alt="twitter-icon" class="h-5 w-5" />
						</a><a href="https://www.instagram.com/dagmekonn/" class="px-4" target="_blank"
							><img src={instagram} alt="instagram-icon" class="h-5 w-5" />
						</a><a
							href="https://www.linkedin.com/in/dagem-mekonnen-939a50140/"
							class="px-4"
							target="_blank"
							><img src={linkedin} alt="linkedin-icon" class="h-5 w-5" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="absolute top-0 left-0 inset-0 -z-30">
			<img
				class="mt-20 object-cover h-full w-full"
				src={aboutbg}
				alt="gugut-wall-art"
			/>
		</div>
	</div>
</div>
