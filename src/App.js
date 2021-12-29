import { useState } from "react";
import Team from "./components/Team.js";
import SettingsWindow from "./components/SettingsWindow.js";
import Settings from "./components/Settings.js";
import AddTeam from "./components/AddTeam.js";
import EditButton from "./components/EditButton.js";
import ResultScreen from "./components/ResultScreen.js";

function App() {
	const STARTING_POINTS = 0;
	const DEFAULT_COLOR = "info";
	const [teams, setTeams] = useState([]);
	const [maxPoints, setMaxPoints] = useState(100);
	const [editMode, setEditMode] = useState(false);
	const [winner, setWinner] = useState(undefined);

	function checkForWinner() {
		let playerReachedMaxPoints = teams.find((e) => e.points >= maxPoints);
		if (playerReachedMaxPoints !== undefined) {
			setWinner(playerReachedMaxPoints.name);
		}
	}
	function closeResult() {
		setWinner(undefined);
	}
	function changePoints(id, value) {
		setTeams(
			teams.map(function (e) {
				if (e.id == id || id == "all") {
					e.points += value;
				}
				return e;
			})
		);
		checkForWinner();
	}
	function setPoints(id, value) {
		setTeams(
			teams.map(function (e) {
				if (e.id == id || id == "all") {
					e.points = value;
				}
				return e;
			})
		);
		checkForWinner();
	}
	function handleMaxPoints(event) {
		setMaxPoints(parseInt(event.target.value));
		checkForWinner();
	}
	function handleEdit() {
		setEditMode(!editMode);
	}
	function handleRemovingTeam(team_id) {
		setTeams(teams.filter((e) => e.id != team_id));
	}
	function handleNameChange(team_id, value) {
		setTeams(
			teams.map((e) => {
				if (e.id == team_id) {
					e.name = value;
				}
				return e;
			})
		);
	}
	function handleAddingNewTeam() {
		setTeams([...teams, { name: "", points: 0, id: teams.length === 0 ? 0 : teams[teams.length - 1].id + 1 }]);
		setEditMode(true);
	}
	function handleSetColor(team_id, value) {
		setTeams(
			teams.map((e) => {
				if (e.id == team_id) {
					e.color = value;
				}
				return e;
			})
		);
	}
	function handleRemoveAllTeams() {
		setTeams([]);
	}
	document.addEventListener("keydown", (e) => {
		if (editMode && e.keyCode == 13) {
			handleEdit();
		}
	});

	return (
		<div className="section">
			{winner !== undefined && <ResultScreen closeResult={closeResult} name={winner} />}
			<div className="teams">
				{teams.map((e) => (
					<Team settings={e} key={e.id} editMode={editMode} maxPoints={maxPoints} handlers={{ changePoints, setPoints, handleRemovingTeam, handleNameChange, handleEdit, handleSetColor }} />
				))}
			</div>
			<div className={"editButtons " + (editMode ? "edit" : "")}>
				<AddTeam handleClick={handleAddingNewTeam} />
				<EditButton handleClick={handleEdit} />
			</div>
			<SettingsWindow content={<Settings handlers={{ handleMaxPoints, setPoints, handleEdit, handleRemoveAllTeams }} editMode={editMode} />} />
		</div>
	);
}

export default App;
