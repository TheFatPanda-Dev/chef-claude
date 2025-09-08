import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	return (
		<div className="flex flex-col items-center w-full">
			<Header />
			<Main />
		</div>
	);
}

export default App;
