import { FaRegEdit } from "react-icons/fa";
import CountButton from "./CountButton";
import ColorSelect from "./ColorSelect";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

const Team = (props) => {
	const [selected, setSelected] = useState(false);

	function handleChange(event) {
		if (parseInt(event.target.value)) {
			props.handlers.setPoints(props.settings.id, parseInt(event.target.value));
		}
	}
	function handleNameChange(event) {
		props.handlers.handleNameChange(props.settings.id, event.target.value);
	}

	return (
		<div
			className={"media team " + (props.editMode ? "edit" : "") + (selected ? " selected" : "")}
			onMouseOver={() => {
				setSelected(true);
			}}
			onMouseLeave={() => {
				setSelected(false);
			}}
		>
			<div className="media-left" onDoubleClick={props.handlers.handleEdit}>
				{props.editMode ? <input class="input is-dark" type="text" onChange={handleNameChange} defaultValue={props.settings.name}></input> : <h1 className="title">{props.settings.name}</h1>}
				<div className="level">
					<p>Points</p>
					<input class="points input is-dark" type="number" value={props.settings.points} onChange={handleChange}></input>
				</div>
			</div>
			<div className="media-content">{props.editMode ? <ColorSelect handleClick={props.handlers.handleSetColor} team_id={props.settings.id} /> : <progress className={"progress is-large is-" + props.settings.color} value={props.settings.points} max={props.maxPoints}></progress>}</div>
			<div className="media-right count-btn">
				{props.editMode ? (
					<button
						class="button is-large"
						onClick={() => {
							props.handlers.handleRemovingTeam(props.settings.id);
						}}
					>
						<FaTrashAlt />
					</button>
				) : (
					<div>
						<CountButton handleClick={props.handlers.changePoints} team_id={props.settings.id} />
						<CountButton subtract={true} handleClick={props.handlers.changePoints} team_id={props.settings.id} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Team;
