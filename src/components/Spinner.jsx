import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => (
	<FontAwesomeIcon
		icon={faSpinner}
		className="text-9xl m-auto animate-spin"
		style={{
			animationDuration: "2.5s",
			animationIterationCount: "infinite",
		}}
	/>
);

export default Spinner;
