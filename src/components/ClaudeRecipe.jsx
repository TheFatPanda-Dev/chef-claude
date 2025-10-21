export default function ClaudeRecipe({getRecipe, recipeShown}) {
	return (
		<section className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center rounded-lg bg-[#F0EFEB] mt-6 sm:mt-10 px-4 sm:px-7 py-5 sm:py-7">
			<div className="flex-1">
				<h3 className="text-lg sm:text-[1.125rem] font-medium leading-6 mb-2">
					{recipeShown ? "Recipe Generated!" : "Ready for a recipe?"}
				</h3>
				<p className="text-gray-500 text-sm leading-5">
					{recipeShown
						? "Your recipe is ready. Clear it to generate a new one."
						: "Generate a recipe from your list of ingredients."}
				</p>
			</div>
			<button
				className={`border-none rounded-md shadow-sm text-[#FAFAF8] px-4 sm:px-4 py-3 sm:py-2 font-sans text-sm transition-all duration-200 w-full sm:w-auto ${
					recipeShown
						? "bg-gray-400 cursor-not-allowed"
						: "bg-[#D17557] hover:bg-[#B86447] cursor-pointer"
				}`}
				type="button"
				onClick={recipeShown ? undefined : getRecipe}
				disabled={recipeShown}
			>
				{recipeShown ? "Recipe Generated" : "Get a recipe"}
			</button>
		</section>
	);
}
