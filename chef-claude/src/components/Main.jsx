export default function Main() {
	return (
		<main className="w-3xl">
			<form className="flex gap-[12px] justify-center items-center p-5">
				<input
					className="border border-gray-300 rounded-md p-2 shadow-xl grow"
					aria-label="Add ingredient"
					type="text"
					placeholder="e.g. oregano"
				/>
				<button type="submit">Add ingredient</button>
			</form>
		</main>
	);
}
