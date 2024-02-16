// Components
const FormControls = ({ handleCancel, handleDelete }) => {
	// Tailwind utility function to apply conditional classes and hover effects
	const buttonClass = ($warning) =>
		`font-secondary m-2 ${
			$warning ? "ml-auto" : "ml-2"
		} p-2 cursor-pointer ${
			$warning
				? "bg-red-500 hover:bg-red-600 text-white"
				: "bg-gray-200 hover:bg-gray-300 text-black"
		} border-none shadow-md rounded-md transition-colors duration-150`;

	return (
		<div className="mt-5 flex flex-row justify-start w-full">
			<button className={buttonClass()} onClick={handleCancel}>
				Cancel
			</button>
			<button className={buttonClass()} type="submit">
				Submit
			</button>
			<button className={buttonClass(true)} onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};

// Export
export default FormControls;
