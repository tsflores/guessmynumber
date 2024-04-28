//module that creates the header with the navigation items.  Shows up on all of the pages

import {Link} from 'react-router-dom';
import statsIcon from "./icons8-bar-chart-50.png"  //to indicate stats page
import gameIcon from "./icons8-games-50.png";      //to indicate game or home page
import helpIcon from "./icons8-info-50.png";       //to indicate information page 


export function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/"><img src = {gameIcon} alt="Game" /></Link></li>
		<li><Link to="/stats"><img src = {statsIcon} alt="Stats"/></Link></li>
		<li><Link to="/info"><img src = {helpIcon} alt = "Info" /></Link></li>
		</ul>
	);
}

//components exported that will get rendered on the page based on user navigation
export function Header() {
	return (
		<div className='header'>
			<Nav />
		</div>
	)
}