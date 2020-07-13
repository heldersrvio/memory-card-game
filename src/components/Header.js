import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
	return (
		<div id="header">
			<div id="header-left-section">
				<div id="header-title">
					<h1>Amphibia Memory Game</h1>
				</div>
				<span>
					Get points by clicking on an image but don't click on any more than
					once!
				</span>
			</div>
			<div id="header-right-section">
				<span>Score: {props.score}</span>
				<span>Best score: {props.bestScore}</span>
			</div>
		</div>
	);
};

Header.propTypes = {
	score: PropTypes.number,
	bestScore: PropTypes.number,
};

export default Header;
