export default function RecipeDisplay() {
	return (
		<section className="max-w-4xl mx-auto px-4 py-8">
			<h2 className="text-4xl font-bold text-gray-800 text-center mb-8 pb-4 border-b-2 border-orange-400">
				🍽️ Chef Claude Recommends
			</h2>
			<article
				className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
				aria-live="polite"
			>
				<div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400">
					<p className="text-gray-700 text-lg leading-relaxed">
						Based on the ingredients you have available, I would recommend
						making a simple and delicious{" "}
						<strong className="text-orange-600">Beef Bolognese Pasta</strong>.
						Here is the recipe:
					</p>
				</div>

				<h3 className="text-3xl font-bold text-gray-800 mb-6 text-center pb-2 border-b border-gray-300">
					🍝 Beef Bolognese Pasta
				</h3>

				<div className="flex flex-col gap-8 mb-8">
					{/* Ingredients Section */}
					<div className="bg-green-50 rounded-lg p-6 border border-green-200">
						<h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
							🥄 Ingredients:
						</h4>
						<ul className="space-y-2">
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">1 lb. ground beef</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">1 onion, diced</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">3 cloves garlic, minced</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">
									2 tablespoons tomato paste
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">
									1 (28 oz) can crushed tomatoes
								</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">1 cup beef broth</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">1 teaspoon dried oregano</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">1 teaspoon dried basil</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">Salt and pepper to taste</span>
							</li>
							<li className="flex items-start">
								<span className="text-green-600 mr-2">•</span>
								<span className="text-gray-700">
									8 oz pasta of your choice (e.g., spaghetti, penne, or
									linguine)
								</span>
							</li>
						</ul>
					</div>

					{/* Instructions Section */}
					<div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
						<h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
							👨‍🍳 Instructions:
						</h4>
						<ol className="space-y-3">
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									1
								</span>
								<span className="text-gray-700">
									Bring a large pot of salted water to a boil for the pasta.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									2
								</span>
								<span className="text-gray-700">
									In a large skillet or Dutch oven, cook the ground beef over
									medium-high heat, breaking it up with a wooden spoon, until
									browned and cooked through, about 5-7 minutes.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									3
								</span>
								<span className="text-gray-700">
									Add the diced onion and minced garlic to the skillet and cook
									for 2-3 minutes, until the onion is translucent.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									4
								</span>
								<span className="text-gray-700">
									Stir in the tomato paste and cook for 1 minute.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									5
								</span>
								<span className="text-gray-700">
									Add the crushed tomatoes, beef broth, oregano, and basil.
									Season with salt and pepper to taste.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									6
								</span>
								<span className="text-gray-700">
									Reduce the heat to low and let the sauce simmer for 15-20
									minutes, stirring occasionally, to allow the flavors to meld.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									7
								</span>
								<span className="text-gray-700">
									While the sauce is simmering, cook the pasta according to the
									package instructions. Drain the pasta and return it to the
									pot.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									8
								</span>
								<span className="text-gray-700">
									Add the Bolognese sauce to the cooked pasta and toss to
									combine.
								</span>
							</li>
							<li className="flex items-start">
								<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
									9
								</span>
								<span className="text-gray-700">
									Serve hot, garnished with additional fresh basil or grated
									Parmesan cheese if desired.
								</span>
							</li>
						</ol>
					</div>
				</div>

				<div className="text-center pt-6 border-t border-gray-200">
					<p className="text-gray-600 italic">
						✨ Enjoy your delicious homemade Beef Bolognese Pasta! ✨
					</p>
				</div>
			</article>
		</section>
	);
}
