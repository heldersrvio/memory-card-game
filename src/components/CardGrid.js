import React, { useState } from 'react';
import Card from './Card';
import AnneBoonchuy from '../images/anne.jpg';
import SadieCroaker from '../images/croaker.png';
import CaptainGrime from '../images/grime.png';
import HopPopPlantar from '../images/hoppop.png';
import LeopoldLoggle from '../images/loggle.png';
import MaddieFlour from '../images/maddie.jpg';
import PollyPlantar from '../images/polly.png';
import Sasha from '../images/sasha.jpg';
import SprigPlantar from '../images/sprig.png';
import SylviaSundew from '../images/sylvia.png';
import MayorToadstool from '../images/toadstool.jpg';
import Wally from '../images/wally.png';
import PropTypes from 'prop-types';
import './CardGrid.css';

const CardGrid = (props) => {
	const cards = [
		{ image: AnneBoonchuy, name: 'Anne Boonchuy' },
		{ image: SadieCroaker, name: 'Sadie Croaker' },
		{ image: CaptainGrime, name: 'Captain Grime' },
		{ image: HopPopPlantar, name: 'Hop Pop Plantar' },
		{ image: LeopoldLoggle, name: 'Leopold Loggle' },
		{ image: MaddieFlour, name: 'Maddie Flour' },
		{ image: PollyPlantar, name: 'Polly Plantar' },
		{ image: Sasha, name: 'Sasha' },
		{ image: SprigPlantar, name: 'Sprig Plantar' },
		{ image: SylviaSundew, name: 'Sylvia Sundew' },
		{ image: MayorToadstool, name: 'Mayor Toadstool' },
		{ image: Wally, name: 'Wally' },
	];

	const [positions, setPositions] = useState(
		cards.map((value, index) => index)
	);

	const shuffleArray = (array) => {
		let shuffledArray = array.slice(0);
		for (let i = 0; i < shuffledArray.length; i++) {
			const j = Math.floor(Math.random() * shuffledArray.length);
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
	};

	const randomizeCards = () => {
		setPositions(shuffleArray(positions));
	};

	return (
		<div id="card-grid">
			{positions.map((position) => {
				return (
					<Card
						key={cards[position].name}
						image={cards[position].image}
						name={cards[position].name}
						reset={props.reset}
						endCurrentStage={props.endCurrentStage}
						incrementScore={props.incrementScore}
						randomizeCards={randomizeCards}
					/>
				);
			})}
		</div>
	);
};

CardGrid.propTypes = {
	reset: PropTypes.bool,
	endCurrentStage: PropTypes.func,
	incrementScore: PropTypes.func,
};

export default CardGrid;
