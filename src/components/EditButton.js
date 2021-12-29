import { FaRegEdit } from "react-icons/fa";

const EditButton = ({ handleClick }) => {
	return (
		<button className="button is-large is-outlined is-info editButton" onClick={handleClick}>
			<FaRegEdit />
		</button>
	);
};

export default EditButton;
