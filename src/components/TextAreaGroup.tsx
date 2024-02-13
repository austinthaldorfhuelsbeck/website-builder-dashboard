import { FC } from "react";
import { IInputProps } from "../interfaces";

const TextAreaGroup: FC<IInputProps> = ({
	label,
	id,
	placeholder,
	register,
	error,
}) => (
	<div className="flex flex-col space-y-1">
		<label htmlFor={id} className="text-sm font-semibold text-gray-500">
			{label}
		</label>
		<textarea
			className="border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
			id={id}
			placeholder={placeholder}
			{...register}
		/>
		{error && <p className="text-red-300">{error.message}</p>}
	</div>
);

export default TextAreaGroup;
