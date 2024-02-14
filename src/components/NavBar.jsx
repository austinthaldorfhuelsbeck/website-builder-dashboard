import { faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import useSearchBar from "../hooks/useSearchBar";

const NavBar = () => {
	const { formData, onChange, onClear } = useSearchBar();

	const navigate = useNavigate();

	const onLogout = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};

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
				<button
					className="mx-1 px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors duration-150 focus:outline-none"
					onClick={onClear}
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}
			<button
				className="mx-1 px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors duration-150 focus:outline-none"
				onClick={onLogout}
			>
				<FontAwesomeIcon icon={faSignOut} />
			</button>
		</div>
	);
};

export default NavBar;
