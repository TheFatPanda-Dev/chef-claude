import ReactMarkdown from "react-markdown";

export default function RecipeDisplay({recipe}) {
	const markdownComponents = {
		h1: ({children}) => (
			<h1 className="text-3xl font-bold text-gray-800 mb-6 text-center pb-2 border-b border-gray-300">
				{children}
			</h1>
		),
		h2: ({children}) => (
			<h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">{children}</h2>
		),
		h3: ({children}) => (
			<h3 className="text-xl font-bold mb-3 mt-6">
				{children.toString().toLowerCase().includes("ingredient") ? (
					<span className="text-green-800 flex items-center">
						🥄 {children}
					</span>
				) : children.toString().toLowerCase().includes("instruction") ||
				  children.toString().toLowerCase().includes("direction") ||
				  children.toString().toLowerCase().includes("step") ? (
					<span className="text-blue-800 flex items-center">👨‍🍳 {children}</span>
				) : (
					<span className="text-gray-800">{children}</span>
				)}
			</h3>
		),
		ul: ({children}) => {
			const isIngredients =
				children.toString().toLowerCase().includes("cup") ||
				children.toString().toLowerCase().includes("tablespoon") ||
				children.toString().toLowerCase().includes("teaspoon") ||
				children.toString().toLowerCase().includes("oz") ||
				children.toString().toLowerCase().includes("lb");

			return (
				<ul
					className={`space-y-2 mb-6 rounded-lg p-6 border ${
						isIngredients
							? "bg-green-50 border-green-200"
							: "bg-blue-50 border-blue-200"
					}`}
				>
					{children}
				</ul>
			);
		},
		ol: ({children}) => (
			<ol className="space-y-3 mb-6 bg-blue-50 rounded-lg p-6 border border-blue-200">
				{children}
			</ol>
		),
		li: ({children, ...props}) => {
			const isOrdered = props.node?.parent?.tagName === "ol";
			const isIngredient =
				children.toString().toLowerCase().includes("cup") ||
				children.toString().toLowerCase().includes("tablespoon") ||
				children.toString().toLowerCase().includes("teaspoon") ||
				children.toString().toLowerCase().includes("oz") ||
				children.toString().toLowerCase().includes("lb");

			if (isOrdered) {
				const index = props.index || 0;
				return (
					<li className="flex items-start">
						<span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
							{index + 1}
						</span>
						<span className="text-gray-700">{children}</span>
					</li>
				);
			} else {
				return (
					<li className="flex items-start">
						<span
							className={`mr-2 ${
								isIngredient ? "text-green-600" : "text-blue-600"
							}`}
						>
							•
						</span>
						<span className="text-gray-700">{children}</span>
					</li>
				);
			}
		},
		p: ({children}) => (
			<p className="text-gray-700 text-lg leading-relaxed mb-4">{children}</p>
		),
		strong: ({children}) => (
			<strong className="text-orange-600 font-semibold">{children}</strong>
		),
		em: ({children}) => <em className="text-gray-600 italic">{children}</em>,
	};

	return (
		<section className="max-w-4xl mx-auto px-4 py-8">
			<h2 className="text-4xl font-bold text-gray-800 text-center mb-8 pb-4 border-b-2 border-orange-400">
				🍽️ Chef Claude Recommends
			</h2>
			<article
				className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
				aria-live="polite"
			>
				{recipe ? (
					<div className="prose prose-lg max-w-none">
						<ReactMarkdown components={markdownComponents}>
							{recipe}
						</ReactMarkdown>

						<div className="text-center pt-6 border-t border-gray-200 mt-8">
							<p className="text-gray-600 italic">
								✨ Enjoy your delicious homemade meal! ✨
							</p>
						</div>
					</div>
				) : (
					<div className="mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-400">
						<p className="text-gray-700 text-lg leading-relaxed">
							Loading your personalized recipe...
						</p>
					</div>
				)}
			</article>
		</section>
	);
}
