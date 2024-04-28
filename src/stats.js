import { gameStats } from "./gameRange.js";
import { Header } from "./navigation.js";


//component to illustrate # of Wins, Win percentage, and Avg. Guesses required per win
//initial load will show 0 or NaN until user plays a game 
function GameStatistics(props) {

	var games = props.games
	var wins = props.wins;
	var totalGuesses = props.totalGuesses;

	return <>
		<h1>Game Stats</h1>
		<ul className="stats_list">
			<li>
				<div className="stat_style">{games}</div>
				<div className="stat_label">Played</div>
			</li>
			<li>
				<div className="stat_style">{(wins/games).toFixed(1)*100 + "%"}</div>
				<div className="stat_label">Win %</div>
			</li>
			<li>
				<div className="stat_style">{(totalGuesses/wins).toFixed(1)}</div>
				<div className="stat_label">Avg. Guesses</div>
			</li>
		</ul>
	</>
}

export function Stats() {

	return (

		<div className='page'>
			<Header />
			<GameStatistics games={gameStats.gamesPlayed}
				wins={gameStats.wins}
				totalGuesses={gameStats.totalGuesses}
			/>
		</div>
	)
}