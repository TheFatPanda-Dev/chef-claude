export default function IngredientsList({ ingredients }) {
	return (
		<section>
			<h2 className="text-4xl font-bold mt-8 mb-4">Ingredients on hand:</h2>
			<ul className="list-inside">
				{ingredients.map((ingredient) => (
					<li
						key={ingredient}
						className="py-2 list-disc text-gray-600 capitalize"
					>
						{ingredient}
					</li>
				))}
			</ul>
		</section>
	);
}