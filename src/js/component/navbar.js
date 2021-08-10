import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState("");
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="dropdown">
				<button
					onClick={() => {
						if (showMenu == "") {
							setShowMenu("show");
						} else if (showMenu == "show") {
							setShowMenu("");
						}
					}}
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Dropdown button
				</button>
				<div className={"dropdown-menu " + showMenu} aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</nav>
	);
};
