import { faEye, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import useSearchBar from "../hooks/useSearchBar";

const NavBar = () => {
	const { formData, onChange, onClear } = useSearchBar();

	const navigate = useNavigate();

	const onLogout = () => {
		signOut(firebaseAuth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const buttonClass =
		"mx-1 p-4 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors duration-150 focus:outline-none";
	const externalUrl = "https://austinthaldorfhuelsbeck.github.io/cl-html/";

	return (
		<div className="sticky top-0 bg-white z-10 flex flex-row justify-start p-4 shadow">
			<input
				className="w-full m-2 border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={onChange}
				value={formData.query}
			/>
			{formData.query && (
				<button className={buttonClass} onClick={onClear}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}

			<Link to={externalUrl} target="_blank">
				<button className={buttonClass}>
					<FontAwesomeIcon icon={faEye} />
				</button>
			</Link>
			<button className={buttonClass} onClick={onLogout}>
				<FontAwesomeIcon icon={faSignOut} />
			</button>
		</div>
	);
};

export default NavBar;
