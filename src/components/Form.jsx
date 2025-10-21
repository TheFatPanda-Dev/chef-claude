import {useState, useRef, useEffect} from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import RecipeDisplay from "./RecipeDisplay";
import {getRecipeFromChefClaude} from "../ai";

export default function Form() {
	const [ingredients, setIngredients] = useState([]);
	const [error, setError] = useState("");
	const [recipeShown, setRecipeShown] = useState(false);
	const [recipe, setRecipe] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const errorTimeoutRef = useRef();
	const inputRef = useRef();
	const recipeRef = useRef();

	const addIngredient = (formData) => {
		const addField = Object.fromEntries(formData)["add-ingredient"].trim();
		console.log(addField);
		if (addField === "") return;
		if (
			ingredients.map((i) => i.toLowerCase()).includes(addField.toLowerCase())
		) {
			setError(`Ingredient "${addField}" is already in the list.`);
			if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
			errorTimeoutRef.current = setTimeout(() => {
				setError("");
			}, 3000);
		} else {
			setIngredients([...ingredients, addField]);
			setError("");
			if (errorTimeoutRef.current) clearTimeout(errorTimeoutRef.current);
		}
		inputRef.current.value = "";
	};

	const getRecipe = async () => {
		console.log("Generating recipe...");
		setRecipeShown(true);
		try {
			const recipeText = await getRecipeFromChefClaude(ingredients);
			setRecipe(recipeText);
			console.log("Recipe generated successfully");
		} catch (error) {
			console.error("Error getting recipe:", error);
		}
	};

	// Auto-scroll to recipe when it's shown
	useEffect(() => {
		if (recipeShown && recipeRef.current) {
			// Small delay to ensure the component has rendered
			setTimeout(() => {
				recipeRef.current.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 100);
		}
	}, [recipeShown]);

	return (
		<main className="w-3xl px-2.5 py-8">
			<form
				className="flex gap-[12px] justify-center items-center"
				action={addIngredient}
			>
				<input
					ref={inputRef}
					className="border border-gray-300 rounded-md p-2 shadow-xl grow"
					aria-label="Add ingredient"
					type="text"
					name="add-ingredient"
					placeholder="e.g. oregano"
				/>
				<button className="before:content-['+_'] bg-black text-white rounded-md px-8 py-2 shadow-xl">
					Add ingredient
				</button>
			</form>
			{error && (
				<div className="bg-orange-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
					<svg
						viewBox="0 0 24 24"
						className="text-yellow-600 w-5 h-5 mr-3"
						aria-hidden="true"
					>
						<path
							fill="currentColor"
							d="M23.119,20,13.772,2.15h0a2,2,0,0,0-3.543,0L.881,20a2,2,0,0,0,1.772,2.928H21.347A2,2,0,0,0,23.119,20ZM11,8.423a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h-.028a1.528,1.528,0,0,1-1.522-1.47,1.476,1.476,0,0,1,1.448-1.53h.028A1.527,1.527,0,0,1,13.5,18.4,1.475,1.475,0,0,1,12.05,19.933Z"
						></path>
					</svg>
					<span className="text-yellow-800 grow">{error}</span>
					<button
						type="button"
						aria-label="Dismiss error"
						className="ml-2 px-2 text-yellow-700 font-bold bg-transparent border-none cursor-pointer text-xl"
						onClick={() => {
							setError("");
							if (errorTimeoutRef.current)
								clearTimeout(errorTimeoutRef.current);
						}}
					>
						&#10005;
					</button>
				</div>
			)}

			{ingredients.length > 0 && (
				<div>
					<IngredientsList ingredients={ingredients} />

					{ingredients.length > 3 && (
						<ClaudeRecipe
							getRecipe={getRecipe}
							recipeShown={recipeShown}
						/>
					)}

					{recipeShown && (
						<div ref={recipeRef}>
							<RecipeDisplay
								recipe={recipe}
								setRecipe={setRecipe}
								setIngredients={setIngredients}
								setRecipeShown={setRecipeShown}
							/>
						</div>
					)}
				</div>
			)}
		</main>
	);
}
