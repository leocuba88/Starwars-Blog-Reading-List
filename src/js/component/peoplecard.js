import React from "react";
import PropTypes from "prop-types";
import { FavoritesContext } from "../FavoritesContext";

export function PeopleCard(props) {
	const [peoplePage, setPeoplePage] = React.useState(null);
	const [favorites, setFavorites] = React.useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + props.uid)
			.then(res => res.json())
			.then(data => setPeoplePage(data.result))
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
				<img src="http://via.placeholder.com/640x360" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<ul>
							<li>Height: {peoplePage !== null && <div>{peoplePage.properties.height}</div>}</li>
							<li>Mass: {peoplePage !== null && <div>{peoplePage.properties.mass}</div>}</li>
							<li>Gender: {peoplePage !== null && <div>{peoplePage.properties.gender}</div>}</li>
						</ul>
						<a href={"/people/" + props.uid}>Learn more</a>
						{peoplePage !== null && <div>{peoplePage.properties.height}</div>}
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

PeopleCard.propTypes = {
	name: PropTypes.string,
	uid: PropTypes.string,
	height: PropTypes.string,
	mass: PropTypes.string,
	gender: PropTypes.string
};
