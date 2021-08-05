import React from "react";
import PropTypes from "prop-types";

export function PeopleCardFull(props) {
return <div>
    <p>{props.name}</p>
    <p>{props.height}</p>

</div>
}


PeopleCardFull.propTypes = {
	name: PropTypes.string,
    uid: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
};