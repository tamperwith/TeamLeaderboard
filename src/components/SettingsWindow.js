import React from "react";
import { useState } from "react";
import { FaAngleDoubleUp, FaAngleDoubleDown } from "react-icons/fa";

const SettingsWindow = ({ content }) => {
	const [clicked, setClicked] = useState(false);

	return (
		<div className={"settings" + (clicked ? " clicked" : "")}>
			<button className="settings-btn button is-info" onClick={() => setClicked(!clicked)}>
				{clicked ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
			</button>
			{clicked && <div className="menu notification is-info">{content}</div>}
		</div>
	);
};

export default SettingsWindow;
