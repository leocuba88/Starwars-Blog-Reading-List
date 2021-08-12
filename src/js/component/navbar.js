import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../FavoritesContext";
import { PeopleCard } from "./peoplecard";

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

			{/* <div className="dropdown">
				<button
					onClick={() => {
						if (showMenu == "") {
							setShowMenu("show");
						} else if (showMenu == "show") {
							setShowMenu("");
						}
					}}
					className="btn btn-primary"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<i className="fas fa-star" />
				</button> */}

			<div
				className="dropdown show"
				onClick={() => {
					if (showMenu == "") {
						setShowMenu("show");
					} else if (showMenu == "show") {
						setShowMenu("");
					}
				}}>
				<a
					className="btn btn-secondary dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					dataToggle="dropdown"
					ariaHasPopup="true"
					ariaExpanded="false">
					Favorites
				</a>

				<div className={"dropdown-menu dropdown-menu-right " + showMenu} ariaLabeledBy="dropdownMenuLink">
					{favorites.map((item, index) => {
						return (
							<a key={index} className="dropdown-item" href={"people/"}>
								{item}
							</a>
						);
					})}
				</div>
			</div>

			{/* <ul className={"dropdown-menu dropdown-menu-right " + showMenu} ariaLabeledBy="dropdownMenuButton">
					<div className="favorite-menu" aria-labelledby="dropdownMenuButton1">
						{favorites.map((item, index) => {
							return (
								<li key={index} className="dropdown-item">
									<a className="dropdown-item" href="#">
										{item}
									</a>
								</li>
							);
						})}
					</div>
				</ul> 
			</div> */}
		</nav>
	);
};
