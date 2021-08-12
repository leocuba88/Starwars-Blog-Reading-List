import React from "react";
import PropTypes from "prop-types";
import "../../styles/people.scss";
import { VehiclesCard } from "./vehiclescard";
import { useParams } from "react-router-dom";

export function VehiclesCardFull(props) {
	const params = useParams();

	return (
		<div id="cards">
			<figure className="cardpeople cardpeople--water">
				<div className="cardpeople__image-container">
					<img
						src={require(`/workspace/Starwars-Blog-Reading-List/src/img/vehicles/${params.id}.jpg`)}
						alt="Vaporeon"
						className="cardpeople__image imgpeople"
					/>
				</div>

				<figcaption className="cardpeople__caption">
					<h1 className="cardpeople__name">{props.name}</h1>

					<h3 className="cardpeople__type">{props.description}</h3>

					<table className="cardpeople__stats">
						<tbody>
							<tr>
								<th>Model</th>
								<td>{props.model}</td>
							</tr>
							<tr>
								<th>Vehicle Class</th>
								<td>{props.vehicle_class}</td>
							</tr>

							<tr>
								<th>Manufacturer</th>
								<td>{props.manufacturer}</td>
							</tr>

							<tr>
								<th>Cost in Credits</th>
								<td>{props.cost_in_credits}</td>
							</tr>
							<tr>
								<th>Length</th>
								<td>{props.length}</td>
							</tr>
							<tr>
								<th>Crew</th>
								<td>{props.crew}</td>
							</tr>
							<tr>
								<th>Passengers</th>
								<td>{props.passengers}</td>
							</tr>
						</tbody>
					</table>

					<div className="cardpeople__abilities">
						<h4 className="cardpeople__ability">
							<span className="cardpeople__label">Consumables</span>
							{props.consumables}
						</h4>
					</div>
				</figcaption>
			</figure>
		</div>
	);
}

VehiclesCardFull.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	description: PropTypes.string,
	model: PropTypes.string,
	vehicle_class: PropTypes.string,
	manufacturer: PropTypes.string,
	cost_in_credits: PropTypes.string,
	length: PropTypes.string,
	crew: PropTypes.string,
	passengers: PropTypes.string,
	max_atmosphering_speed: PropTypes.string,
	cargo_capacity: PropTypes.string,
	consumables: PropTypes.string,
	films: PropTypes.array,
	pilots: PropTypes.array
};
