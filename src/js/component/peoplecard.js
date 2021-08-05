import React from "react";
import PropTypes from "prop-types";

export function PeopleCard(props) {
	const [peoplePage, setPeoplePage] = React.useState(null);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + props.uid)
			.then(res => res.json())
			.then(data => setPeoplePage(data.result))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="card-group">
			<div className="card">
				<img src="http://via.placeholder.com/640x360" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">
						<a href={"/people/" + props.uid}>Learn more</a>
						{peoplePage !== null && <div>{peoplePage.properties.height}</div>}
					</p>
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
	uid: PropTypes.string
};
