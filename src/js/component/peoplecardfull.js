import React from "react";
import PropTypes from "prop-types";
import "../../styles/people.scss";
import { PeopleCard } from "../component/peoplecard";

export function PeopleCardFull(props) {
	return (
		<div id="cards">
			<figure className="cardpeople cardpeople--water">
				<div className="cardpeople__image-container">
					<img
						src="https://aux.iconspalace.com/uploads/light-saber-green-icon-256.png"
						alt="Vaporeon"
						className="cardpeople__image imgpeople"
					/>
				</div>

				<figcaption className="cardpeople__caption">
					<h1 className="cardpeople__name">{props.name}</h1>

					<h3 className="cardpeople__type">{props.gender}</h3>

					<table className="cardpeople__stats">
						<tbody>
							<tr>
								<th>Birth Year</th>
								<td>{props.birth_year}</td>
							</tr>
							<tr>
								<th>Height</th>
								<td>{props.height}</td>
							</tr>

							<tr>
								<th>Mass</th>
								<td>{props.mass}</td>
							</tr>

							<tr>
								<th>Hair Colork</th>
								<td>{props.hair_color}</td>
							</tr>
							<tr>
								<th>Skin Color</th>
								<td>{props.skin_color}</td>
							</tr>
							<tr>
								<th>Eyes Color</th>
								<td>{props.eye_color}</td>
							</tr>
						</tbody>
					</table>

					<div className="cardpeople__abilities">
						<h4 className="cardpeople__ability">
							<span className="cardpeople__label">Status</span>
							Unknown
						</h4>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}

PeopleCardFull.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	hair_color: PropTypes.string,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	description: PropTypes.string
};
