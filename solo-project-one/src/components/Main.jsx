export default function Main() {
	return (
		<main className="">
			<img
				src="./images/profile-picture-croped.jpg"
				alt=""
				className="container rounded-t-xl"
			/>
			<section
				class="w-full max-w-sm bg-[#1A1B21] shadow-xl backdrop-blur-sm p-6"
				aria-labelledby="card-title"
			>
				<header class="text-center">
					<h1
						id="card-title"
						class="text-3xl font-bold tracking-tight text-white"
					>
						Afrim Avmedoski
					</h1>
					<p class="mt-1 text-sm font-medium text-amber-400">
						Frontend Developer
					</p>
					<a
						href="https://thefatpanda.uk"
						class="mt-1 inline-block text-xs text-slate-400 hover:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
					>
						thefatpanda.uk
					</a>
				</header>

				<div class="mt-5 flex items-center justify-center gap-3">
					<a
						href="mailto:afrim@thefatpanda.uk"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 w-[115px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							aria-hidden="true"
							class="size-4"
						>
							<path
								fill="currentColor"
								d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 4-8 5L4 8V6l8 5 8-5z"
							/>
						</svg>
						Email
					</a>

					<a
						href="https://www.linkedin.com/in/afrim-avmedoski/"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 w-[115px]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							aria-hidden="true"
							class="size-4"
						>
							<path
								fill="currentColor"
								d="M100.3 448H7.4V148.9h92.9zm-46.4-340C24.1 108 0 83.3 0 52.5 0 23.5 24.6 0 55.5 0S111 23.5 111 52.5c0 30.8-24.1 55.5-57.1 55.5zM447.9 448h-92.6V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.6V448h-92.6V148.9h88.9v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
							/>
						</svg>
						LinkedIn
					</a>
				</div>

				<div class="mt-7 space-y-2">
					<h2 class="text-white font-semibold">About</h2>
					<p class="text-sm leading-relaxed text-slate-300">
						I am a frontend developer with a particular interest in making
						things simple and automating daily tasks. I try to keep up with
						security and best practices, and am always looking for new things to
						learn.
					</p>
				</div>

				<div class="mt-6 space-y-2">
					<h2 class="text-white font-semibold">Interests</h2>
					<p class="text-sm leading-relaxed text-slate-300">
						Food expert. Music scholar. Reader. Internet fanatic. Beef buff.
						Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
					</p>
				</div>
			</section>
		</main>
	);
}
