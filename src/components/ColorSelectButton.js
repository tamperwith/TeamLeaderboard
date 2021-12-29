const ColorSelectButton = ({ handleClick, team_id, color }) => {
	return (
		<div>
			<button
				className={"button is-" + color}
				onClick={() => {
					handleClick(team_id, color);
				}}
			></button>
		</div>
	);
};

export default ColorSelectButton;
