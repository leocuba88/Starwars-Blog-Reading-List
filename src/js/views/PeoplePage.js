import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function PeoplePage() {
	const params = useParams();
	return <h1>Page for people: {params.id} </h1>;
}
