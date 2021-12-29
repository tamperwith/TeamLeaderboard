import ColorSelectButton from "./ColorSelectButton";

const ColorSelect = ({ handleClick, team_id }) => {
	const COLORS = ["black", "dark", "white", "warning", "success", "primary", "info", "link", "danger"];
	return (
		<div>
			<div className="level-left">
				{COLORS.map((color) => (
					<ColorSelectButton handleClick={handleClick} team_id={team_id} color={color} />
				))}
			</div>

			<p>Color Select</p>
		</div>
	);
};

export default ColorSelect;
