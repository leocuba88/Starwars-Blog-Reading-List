import React from "react";
import PropTypes from "prop-types";
import { FavoritesContext } from "../FavoritesContext";

export function VehiclesCard(props) {
	const [vehiclesPage, setVehiclesPage] = React.useState(null);
	const [favorites, setFavorites] = React.useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/" + props.uid)
			.then(res => res.json())
			.then(data => setVehiclesPage(data.result))
			.catch(err => console.error(err));
	}, []);

	const handleClickFavorite = () => {
		let newFavorites = favorites.concat([props.name]);
		setFavorites(newFavorites);
	};

	const handleClickUnFavorite = () => {
		let newFavorites = favorites.filter(item => item !== props.name);
		setFavorites(newFavorites);
	};

	return (
		<div className="card-group">
			<div className="card">
				<img
					src={require(`/workspace/Starwars-Blog-Reading-List/src/img/vehicles/${props.uid}-vehicle.jpg`)}
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<a href={"/vehicles/" + props.uid}>Learn more</a>
					</p>
					{!favorites.includes(props.name) ? (
						<button className="btn btn-outline-warning" onClick={handleClickFavorite}>
							❤️
						</button>
					) : (
						<button className="btn btn-warning" onClick={handleClickUnFavorite}>
							❤️
						</button>
					)}
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
	);
}

VehiclesCard.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	gender: PropTypes.string
};
