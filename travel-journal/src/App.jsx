import "./App.css";
import Header from "./components/Header";
import SingleJournalCard from "./components/SingleJournalCard";
import data from "../data.js";

function App() {
	const entryElements = data.map((entry) => {
		return <SingleJournalCard key={entry.id} {...entry} />;
	});

	return (
		<>
			<Header />
			{entryElements}
		</>
	);
}

export default App;
