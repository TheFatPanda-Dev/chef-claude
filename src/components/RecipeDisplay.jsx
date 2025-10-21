import ReactMarkdown from "react-markdown";
import {useState} from "react";

export default function RecipeDisplay({
	recipe,
	setRecipe,
	setIngredients,
	setRecipeShown,
}) {
	const [showRawMarkdown, setShowRawMarkdown] = useState(false);

	// Function to process markdown and reorder content
	const processMarkdown = (markdownText) => {
		if (!markdownText) return {processedText: "", mainTitleLevel: null};

		const lines = markdownText.split("\n");
		let mainTitle = "";
		let mainTitleLevel = 7; // Start with a high number
		let processedLines = [];

		// First pass: find the title with fewest '#' symbols
		for (let line of lines) {
			const trimmed = line.trim();
			if (trimmed.startsWith("#")) {
				const level = trimmed.match(/^#+/)[0].length;
				if (level < mainTitleLevel) {
					mainTitleLevel = level;
					mainTitle = trimmed;
				}
			}
		}

		// Second pass: reorder content
		if (mainTitle) {
			// Add main title first
			processedLines.push(mainTitle);
			processedLines.push(""); // Add empty line after title

			// Add remaining content, skipping the main title
			for (let line of lines) {
				const trimmed = line.trim();
				if (trimmed !== mainTitle.trim()) {
					processedLines.push(line);
				}
			}
		} else {
			// If no title found, return original
			return {processedText: markdownText, mainTitleLevel: null};
		}

		return {
			processedText: processedLines.join("\n"),
			mainTitleLevel: mainTitleLevel < 7 ? mainTitleLevel : null,
		};
	};

	const {processedText: processedRecipe, mainTitleLevel} =
		processMarkdown(recipe);
	const markdownComponents = {
		h1: ({children}) => {
			const isMainTitle = mainTitleLevel === 1;
			return (
				<h1
					className={`font-bold mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300 ${
						isMainTitle
							? "text-3xl text-orange-600"
							: "text-2xl sm:text-3xl text-gray-800"
					}`}
				>
					{children}
				</h1>
			);
		},
		h2: ({children}) => {
			const text = children.toString().toLowerCase();
			const isIngredients = text.includes("ingredient");
			const isInstructions =
				text.includes("instruction") ||
				text.includes("step") ||
				text.includes("direction");
			const isMainTitle = mainTitleLevel === 2;

			if (isMainTitle) {
				return (
					<h2 className="text-3xl font-bold text-orange-600 mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300">
						{children}
					</h2>
				);
			} else if (isIngredients) {
				return (
					<h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 text-green-800 flex items-center">
						🥄 {children}
					</h2>
				);
			} else if (isInstructions) {
				return (
					<h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 text-blue-800 flex items-center">
						👨‍🍳 {children}
					</h2>
				);
			} else {
				return (
					<h2 className="text-2xl sm:text-4xl font-bold mt-6 sm:mt-8 text-orange-600 text-center pb-2 sm:pb-3 border-b border-orange-200 mb-4 sm:mb-6">
						{children}
					</h2>
				);
			}
		},
		h3: ({children}) => {
			const text = children.toString().toLowerCase();
			const isIngredients = text.includes("ingredient");
			const isInstructions =
				text.includes("instruction") ||
				text.includes("step") ||
				text.includes("direction");
			const isMainTitle = mainTitleLevel === 3;

			if (isMainTitle) {
				return (
					<h3 className="text-3xl font-bold text-orange-600 mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300">
						{children}
					</h3>
				);
			} else if (isIngredients) {
				return (
					<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 mt-4 sm:mt-6 text-green-800 flex items-center">
						🥄 {children}
					</h3>
				);
			} else if (isInstructions) {
				return (
					<h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 mt-4 sm:mt-6 text-blue-800 flex items-center">
						👨‍🍳 {children}
					</h3>
				);
			} else {
				return (
					<h3 className="text-lg sm:text-xl font-bold mt-4 sm:mt-6 text-orange-600 text-center pb-2 sm:pb-3 border-b border-orange-200 mb-3 sm:mb-6">
						{children}
					</h3>
				);
			}
		},
		ul: ({children}) => (
			<ul className="space-y-2 mb-4 sm:mb-6 bg-gray-50 rounded-lg p-3 sm:p-6 border border-gray-200">
				{children}
			</ul>
		),
		ol: ({children}) => (
			<ol className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 bg-blue-50 rounded-lg p-3 sm:p-6 border border-blue-200">
				{children}
			</ol>
		),
		li: ({children}) => (
			<li className="flex items-start text-sm sm:text-base">
				<span className="mr-2 text-gray-600">•</span>
				<span className="text-gray-700">{children}</span>
			</li>
		),
		p: ({children}) => (
			<p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
				{children}
			</p>
		),
		strong: ({children}) => (
			<strong className="text-orange-600 font-semibold">{children}</strong>
		),
		h4: ({children}) => {
			const isMainTitle = mainTitleLevel === 4;
			if (isMainTitle) {
				return (
					<h4 className="text-3xl font-bold text-orange-600 mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300">
						{children}
					</h4>
				);
			}
			return (
				<h4 className="text-base sm:text-lg font-bold mt-3 sm:mt-4 mb-2 text-gray-800">
					{children}
				</h4>
			);
		},
		h5: ({children}) => {
			const isMainTitle = mainTitleLevel === 5;
			if (isMainTitle) {
				return (
					<h5 className="text-3xl font-bold text-orange-600 mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300">
						{children}
					</h5>
				);
			}
			return (
				<h5 className="text-sm sm:text-base font-bold mt-2 sm:mt-3 mb-1 text-gray-800">
					{children}
				</h5>
			);
		},
		h6: ({children}) => {
			const isMainTitle = mainTitleLevel === 6;
			if (isMainTitle) {
				return (
					<h6 className="text-3xl font-bold text-orange-600 mb-4 sm:mb-6 text-center pb-2 border-b border-gray-300">
						{children}
					</h6>
				);
			}
			return (
				<h6 className="text-xs sm:text-sm font-bold mt-2 mb-1 text-gray-800">
					{children}
				</h6>
			);
		},
	};

	return (
		<section className="w-full px-4 sm:px-6 py-4 sm:py-8">
			<h2 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8 pb-3 sm:pb-4 border-b-2 border-orange-400 max-w-4xl mx-auto">
				🍽️ Chef Claude Recommends
			</h2>
			<article className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200 max-w-4xl mx-auto">
				{recipe ? (
					<div>
						{/* Toggle Button */}
						<div className="mb-4 sm:mb-6 text-center">
							<button
								onClick={() => setShowRawMarkdown(!showRawMarkdown)}
								className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
							>
								{showRawMarkdown
									? "Show Formatted Recipe"
									: "Show Raw Markdown"}
							</button>
						</div>

						{showRawMarkdown ? (
							/* Raw Markdown Display */
							<div className="bg-gray-100 rounded-lg p-3 sm:p-6 border border-gray-300">
								<h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800">
									Raw Markdown Response:
								</h3>
								<pre className="whitespace-pre-wrap text-xs sm:text-sm text-gray-700 font-mono overflow-x-auto">
									{recipe}
								</pre>
							</div>
						) : (
							/* Formatted Recipe Display */
							<div className="prose prose-sm sm:prose-lg max-w-none">
								<ReactMarkdown components={markdownComponents}>
									{processedRecipe}
								</ReactMarkdown>
								<div className="text-center pt-4 sm:pt-6 border-t border-gray-200 mt-6 sm:mt-8">
									<p className="text-gray-600 italic text-sm sm:text-base">
										✨ Enjoy your delicious homemade meal! ✨
									</p>
								</div>
							</div>
						)}
					</div>
				) : (
					<div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400">
						<p className="text-gray-700 text-lg leading-relaxed">
							Loading your personalized recipe...
						</p>
					</div>
				)}
			</article>
			<div className="text-center sm:text-right mt-6 sm:mt-8 max-w-4xl mx-auto">
				<button
					className="bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-lg px-4 sm:px-6 py-2.5 transition-colors duration-200 shadow-sm hover:shadow-md font-medium w-full sm:w-auto"
					onClick={() => {
						setRecipe("");
						setIngredients([]);
						setRecipeShown(false);
					}}
				>
					Clear Recipe
				</button>
			</div>
		</section>
	);
}
