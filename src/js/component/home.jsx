import React, { useState } from 'react';
import "../../styles/index.css"

const Semaforo = () => {
	const [color, setColor] = useState("");
	const [showButton, setShowButton] = useState(true);

	const handleClick = () => {
		setColor(color === "red" ? "yellow" : color === "yellow" ? "green" : "red");
		setShowButton(!showButton);
	};

	return (
		<>
			<div className="contenedorcable">
				<div className="cable"></div>
			</div>

			<div className="contenedorsemaforo">
				<div className="semaforo">
					<div onClick={handleClick} className={color == "red" ? "newred" : "red"}></div>
					<div onClick={handleClick} className={color == "yellow" ? "newyellow" : "yellow"}></div>
					<div onClick={handleClick} className={color == "green" ? "newgreen" : "green"}></div>
				</div>
				<button onClick={handleClick}>Cambiar color</button>

			</div>

		</>
	);
};

export default Semaforo;
