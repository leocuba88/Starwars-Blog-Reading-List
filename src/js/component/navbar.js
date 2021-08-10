import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../FavoritesContext";

export const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState("");
	const [favorites, setFavorites] = React.useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/home">
				<img
					className="logo"
					src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg"
				/>
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
					Favorites
				</button>
				<div className={"dropdown-menu " + showMenu} aria-labelledby="dropdownMenuButton">
					<ul className="dropdown_button" href="#">
						{favorites.map((item, index) => {
							return (
								<li key={index} className="dropdown-item">
									<a className="dropdown-item" href="#">
										{item}
									</a>
									<i className="far fa-trash-alt" />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
