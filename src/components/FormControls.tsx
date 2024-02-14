import { FC } from "react";

// Data
interface ComponentProps {
	onCancel: (e: any) => void;
	onDelete: (...args: any) => any;
}

// Components
const FormControls: FC<ComponentProps> = ({ onCancel, onDelete }) => {
	// Tailwind utility function to apply conditional classes and hover effects
	const buttonClass = ($warning?: boolean) =>
		`font-secondary m-2 ${
			$warning ? "ml-auto" : "ml-2"
		} p-2 cursor-pointer ${
			$warning
				? "bg-red-500 hover:bg-red-600 text-white"
				: "bg-gray-200 hover:bg-gray-300 text-black"
		} border-none shadow-md rounded-md transition-colors duration-150`;

	return (
		<div className="flex flex-row justify-start w-full">
			<button className={buttonClass()} onClick={onCancel}>
				Cancel
			</button>
			<button className={buttonClass()} type="submit">
				Submit
			</button>
			<button className={buttonClass(true)} onClick={onDelete}>
				Delete
			</button>
		</div>
	);
};

// Export
export default FormControls;
