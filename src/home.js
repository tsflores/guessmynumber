//primary landing page where the game is played and relevant statistics are tracked and updated

import { Header } from "./navigation.js"; //navigation component
import { gameRange, gameStats } from "./gameRange.js";  //import the range answer falls within
import { useState } from "react";

//component to apply a lable to the input box that will be used for the user to enter guess
function Label(props) {
    return <div className="label_container">
        <label className="label_style">{props.children}</label>
    </div>
}

function generateRandomNumber() {
    return Math.floor(Math.random() * gameRange.max); //creates a random integer between our min and max criteria
}

//component that returns a form where the user can enter a valid guess and check it against the answer
function Form() {

    const [answer, getNewAnswer] = useState(generateRandomNumber);  //our random number as the answer
    const [currGuess, resetCurrGuess] = useState("");               //user entered guess in the text box
    const [count, setCount] = useState(0);                          //number of attempts made
    const [userMsg, setMsg] = useState("");                         //alerts user of status of the guess (too low, too high, or correct)
    const [attemptsMsg, setAttemptsMsg] = useState("");             //to illustrate how many attempts were required
    const [userInput, setVisible] = useState(false);                //to enable or disable text box

    var attempts = count;

    //This function will check the users guess and return a message based on the validity of the entry or where it falls relative to the answer
    function checkGuess(e) {
        e.preventDefault();
        if (currGuess === "") {
            setMsg("Enter a valid guess. See help page for details.");
        }
        else if (isNaN(currGuess) || parseInt(currGuess) < parseInt(gameRange.min) || parseInt(currGuess) > parseInt(gameRange.max)) {
            setMsg("Must be an integer between " + gameRange.min + " and " + gameRange.max)
        }
        else {
            if (attempts < gameRange.trials - 1) {
                if (parseInt(currGuess) < answer) {
                    setMsg("Your answer is too low.");
                    
                }
                else if (parseInt(currGuess) > answer) {
                    setMsg("Your answer is too high.");
                   
                }
                else {
                    setMsg("Correct!");
                    setAttemptsMsg("It took you " + (attempts + 1) + " guesses.");
                    setVisible(true);
                    gameStats.wins += 1;    //update the number of wins by 1
                    gameStats.gamesPlayed += 1;
                    gameStats.totalGuesses += attempts + 1;
                }
            }
            else {
                setMsg("Sorry.")
                setAttemptsMsg("I was thinking of " + answer);
                setVisible(true);
                gameStats.gamesPlayed += 1;
            }

            setCount((count) => parseInt(count) + 1);
        }
        resetCurrGuess("");
    };

    //used to resart the game and give the user additional opportunities to keep playing with a new answer
    //reset a variety of items to allow for additional game play
    function resetGame(e) {
        e.preventDefault();
        getNewAnswer(generateRandomNumber);
        setMsg("");
        setCount("0");
        setAttemptsMsg("");
        resetCurrGuess("");
        setVisible(false);
    }

    return <form>
        <Label name='name'>Remaining Guesses: {gameRange.trials - count} </Label>
        <p id="userAlert">{userMsg} {attemptsMsg}</p>
        <input type="text" name="userGuess" value={currGuess} onChange={(e) => resetCurrGuess(e.target.value)} disabled={userInput} />< br />
        {(userMsg === "Correct!" || userMsg ==="Sorry.") ? (<button type="button" onClick={(e) => resetGame(e)}>New Game</button>) :
            (<button type="button" onClick={(e) => checkGuess(e)}>Check my Guess</button>)}
    </form>
}

//home page
export function Home() {
    return (
        <div id='container'>
            <div className='page'>
                <Header />
                <h1>Can you think of the number on my mind?</h1>
                <h2>Hint: It's a number between {gameRange.min} and {gameRange.max} </h2>
                <Form></Form>
            </div>
        </div>
    )
}