import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import useSearchBar from "../hooks/useSearchBar";

const NavBar: FC = () => {
	const { formData, onChange, onClear } = useSearchBar();

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
		</div>
	);
};

export default NavBar;
