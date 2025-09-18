import {useState, useRef} from "react";

export default function Form() {
	const [ingredients, setIngredients] = useState([]);
	const [error, setError] = useState("");
	const errorTimeoutRef = useRef();
	const inputRef = useRef();

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
					<div className="flex justify-between items-center rounded-lg bg-[#F0EFEB] mt-10 px-7 py-7">
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
						>
							Get a recipe
						</button>
					</div>
				</div>
			)}
		</main>
	);
}
