import React from "react";
import PropTypes from "prop-types";
import "../../styles/people.scss";
import { PlanetsCard } from "./planetscard";
import { useParams } from "react-router-dom";

export function PlanetsCardFull(props) {
	const params = useParams();

	return (
		<div id="cards">
			<figure className="cardpeople cardpeople--water">
				<div className="cardpeople__image-container">
					<img
						src={require(`/workspace/Starwars-Blog-Reading-List/src/img/planets/${params.id}.jpg`)}
						alt="Vaporeon"
						className="cardpeople__image imgpeople"
					/>
				</div>

				<figcaption className="cardpeople__caption">
					<h1 className="cardpeople__name">{props.name}</h1>

					<table className="cardpeople__stats">
						<tbody>
							<tr>
								<th>Diameter</th>
								<td>{props.diameter}</td>
							</tr>
							<tr>
								<th>Rotation Period</th>
								<td>{props.rotation_period}</td>
							</tr>

							<tr>
								<th>Orbital Period</th>
								<td>{props.orbital_period}</td>
							</tr>

							<tr>
								<th>Gravity</th>
								<td>{props.gravity}</td>
							</tr>
							<tr>
								<th>Population</th>
								<td>{props.population}</td>
							</tr>
							<tr>
								<th>Climate</th>
								<td>{props.climate}</td>
							</tr>
							<tr>
								<th>Terrain</th>
								<td>{props.terrain}</td>
							</tr>
						</tbody>
					</table>

					<div className="cardpeople__abilities">
						<h4 className="cardpeople__ability">
							<span className="cardpeople__label">Surface Water</span>
							{props.surface_water}
						</h4>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}

PlanetsCardFull.propTypes = {
	name: PropTypes.string,
	diameter: PropTypes.string,
	rotation_period: PropTypes.string,
	orbital_period: PropTypes.string,
	gravity: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string,
	terrain: PropTypes.string,
	surface_water: PropTypes.string
};
