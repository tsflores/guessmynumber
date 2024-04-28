import {gameRange} from "./gameRange.js";  //import the range that answer falls within
import {Header} from "./navigation.js";

// view that provides the user information regarding game play including rules
function HowToPlay(props) {
    
    var guesses = props.guesses;
    var lowerRange = props.lower;
    var upperRange = props.upper;
    
    return <> 
    <h1>How To Play</h1>
    <h2 className = "rules_list">Guess the number on my mind!</h2>
    <ul className ="rules_list">
        <li>Enter your guess in the box provided</li>
        <li>Select the Check My Guess button to see if you're right</li>
        <li>The number must be an integer</li>
        <li>The number must be between {lowerRange} and {upperRange}</li>
        <li>You will have {guesses} guesses to get it right</li>
        <li>You can play as many times as you like</li>
    </ul>
    </>
}

export function Info() {

	return (

		<div className='page'>
			<Header />
			<HowToPlay guesses = {gameRange.trials} lower = {gameRange.min} upper = {gameRange.max} />
		</div>
	)
}
