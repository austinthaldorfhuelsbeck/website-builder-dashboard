import { FC } from "react";
import { IInputProps } from "../interfaces";

const InputGroup: FC<IInputProps> = ({ label, id, type, register, error }) => (
	<div className="flex flex-col space-y-1">
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<input
			className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
			id={id}
			type={type}
			{...register}
		/>
		{error && <p className="text-red-300">{error.message}</p>}
	</div>
);

export default InputGroup;
