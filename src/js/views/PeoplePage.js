import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function PeoplePage() {
	const [peoplePage, setPeoplePage] = useState(null);
	const params = useParams();

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(res => res.json())
			.then(data => setPeoplePage(data.result))
			.catch(err => console.error(err));
	}, []);

	return <div>{peoplePage !== null && <div>{peoplePage.properties.height}</div>}</div>;
}
