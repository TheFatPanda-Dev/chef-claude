export default function IngredientsList({ingredients}) {
	return (
		<section className="px-2 sm:px-0">
			<h2 className="text-2xl sm:text-4xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">
				Ingredients on hand:
			</h2>
			<ul className="list-inside bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
				{ingredients.map((ingredient) => (
					<li
						key={ingredient}
						className="py-1.5 sm:py-2 list-disc text-gray-600 capitalize text-sm sm:text-base"
					>
						{ingredient}
					</li>
				))}
			</ul>
		</section>
	);
}
