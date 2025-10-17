export default function ClaudeRecipe({ ingredients, toggleRecipeShown }) {
	return (
		<section className="flex justify-between items-center rounded-lg bg-[#F0EFEB] mt-10 px-7 py-7">
			<div>
				<h3 className="text-[1.125rem] font-medium leading-6 mb-2">
					Ready for a recipe?
				</h3>
				<p className="text-gray-500 text-sm leading-5">
					Generate a recipe from your list of ingredients.
				</p>
			</div>
			<button
				className="border-none rounded-md bg-[#D17557] shadow-sm text-[#FAFAF8] px-4 py-2 font-sans text-sm cursor-pointer"
				type="button"
                onClick={toggleRecipeShown}
			>
				Get a recipe
			</button>
		</section>
	);
}