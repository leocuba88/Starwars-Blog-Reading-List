import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

// export function PeoplePage() {
// 	const params = useParams();
// 	return <h1>Page for people: {params.id} </h1>;
// }

export function PeoplePage() {
	const [peoplePage, setPeoplePage] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/1")
			.then(res => res.json())
			.then(data => setPeoplePage(data.result))
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			{peoplePage.map((people, index) => {
				return <p key={index}>{people.skin_color}</p>;
			})}
		</div>
	);
}
