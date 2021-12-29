import { RiPlayListAddFill } from "react-icons/ri";

const AddTeam = ({ handleClick }) => {
	return (
		<button className="button is-large is-outlined is-info addTeamButton" onClick={handleClick}>
			<RiPlayListAddFill />
		</button>
	);
};

export default AddTeam;
