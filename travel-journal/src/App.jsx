import "./App.css";
import Header from "./components/Header";
import SingleJournalCard from "./components/SingleJournalCard";
import data from "../data.js";

function App() {
	console.log(data);
	return (
		<>
			<Header />
			{data.map((entry) => (
				<SingleJournalCard key={entry.id} {...entry} />
			))}
		</>
	);
}

export default App;
