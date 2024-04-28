import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from "./home.js"; 
import { Info } from "./info.js";
import { Stats } from "./stats.js";
import "./App.css";

function MyApp() {
	//paths used for the pages or navigation items on the app
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stats" element={<Stats />} />
				<Route path="/info" element={<Info />} />
			</Routes>
		</div>
	)
}

function GuessApp() {

	return (
		<Router>
			<MyApp />
		</Router>
	);
}

export default GuessApp;
