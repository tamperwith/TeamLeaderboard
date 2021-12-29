import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CountButton = ({ subtract, handleClick, team_id }) => {
	const className = "button is-info is-light";
	return (
		<>
			<button className={className} onClick={() => handleClick(team_id, subtract ? -1 : 1)}>
				{subtract == true ? <FaMinus /> : <FaPlus />}
			</button>
		</>
	);
};

CountButton.defaultProps = {
	subtract: false,
};

export default CountButton;
