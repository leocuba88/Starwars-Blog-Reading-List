import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<ul className="home-cards">
		<li>
			<a href="/people" className="home-card">
				<img
					src="https://i.pinimg.com/564x/ae/61/c0/ae61c09f6a4b14072cfa87e3c314c77c.jpg"
					className="home-card__image"
					alt=""
				/>
				<div className="home-card__overlay">
					<div className="home-card__header">
						<svg className="home-card__arc" xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<i className="fab fa-old-republic fa-3x" />

						<div className="home-card__header-text">
							<h3 className="home-card__title">People</h3>
						</div>
					</div>
					<p className="home-card__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
					</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/vehicles" className="home-card">
				<img
					src="https://i.pinimg.com/564x/b7/13/bd/b713bd5dc256900e7aafeaa740ad5060.jpg"
					className="home-card__image2"
					alt=""
				/>
				<div className="home-card__overlay">
					<div className="home-card__header">
						<svg className="home-card__arc" xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<i className="fas fa-globe-africa fa-3x" />
						<div className="home-card__header-text">
							<h3 className="home-card__title">Planets</h3>
						</div>
					</div>
					<p className="home-card__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
					</p>
				</div>
			</a>
		</li>
		<li>
			<a href="/planets" className="home-card">
				<img
					src="https://i.pinimg.com/564x/88/6d/80/886d80931ecf151d7b15d58b05454a37.jpg"
					className="home-card__image2"
					alt=""
				/>
				<div className="home-card__overlay">
					<div className="home-card__header">
						<svg className="home-card__arc" xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<i className="fas fa-space-shuttle fa-3x" />
						<div className="home-card__header-text">
							<h3 className="home-card__title">Vehicles</h3>
						</div>
					</div>
					<p className="home-card__description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?
					</p>
				</div>
			</a>
		</li>
	</ul>
);
