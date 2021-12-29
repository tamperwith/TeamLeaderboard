const Settings = ({ handlers, editMode }) => {
	function changeAllTeamsByField(e) {
		if (e.target.value.length > 0) {
			handlers.setPoints("all", parseInt(e.target.value));
		}
	}
	return (
		<>
			<h1 className="title"> Settings</h1>
			<p>Max Points</p>
			<input class="input is-primary" defaultValue="100" onChange={handlers.handleMaxPoints} type="number"></input>
			<p>Set points for all Teams</p>
			<input class="input is-primary" onChange={changeAllTeamsByField} type="number"></input>
			<div className="level">
				<button className="button is-light" onClick={handlers.handleEdit}>
					{editMode ? "Stop Editing" : "Edit Teams"}
				</button>
				<button className="button is-danger is-small" onClick={handlers.handleRemoveAllTeams}>
					Delete All Teams
				</button>
			</div>
		</>
	);
};
export default Settings;
