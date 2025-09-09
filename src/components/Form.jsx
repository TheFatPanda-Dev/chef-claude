import { useState } from 'react';

export default function Form() {
	const initialIngredients = ["Chicken", "Salt", "Pepper", "Olive Oil"];
	const [ingredients, setIngredients] = useState(initialIngredients);
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			setIngredients([...ingredients, inputValue.trim()]);
			setInputValue("");
		}
	};

	return (
		<main className="w-3xl px-2.5 py-8">
			<form className="flex gap-[12px] justify-center items-center" onSubmit={handleSubmit}>
				<input
					className="border border-gray-300 rounded-md p-2 shadow-xl grow"
					aria-label="Add ingredient"
					type="text"
					placeholder="e.g. oregano"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<button className="before:content-['+_'] bg-black text-white rounded-md px-8 py-2 shadow-xl">
					Add ingredient
				</button>
			</form>
			<div>
				<h2 className="text-2xl font-bold mt-8 mb-4">Ingredients on hand:</h2>
				<ul className="list-inside">
					{ingredients.map((ingredient) => (
						<li key={ingredient} className="py-2 list-disc">
							{ingredient}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
