import { FC } from "react";
import { IValidation } from "../interfaces/forms.interface";

// Data interfaces
interface InputProps extends IValidation {
	value: string;
	onChange: (e: any) => void;
}

// InputGroup component
const InputGroup: FC<InputProps> = ({
	type,
	name,
	title,
	placeholder,
	subtext,
	$short,
	onChange,
	value,
}) => (
	<div
		className={`flex flex-col m-4 mr-0 w-full ${$short ? "max-w-xs" : ""}`}
	>
		<label htmlFor={name}>
			<strong>{title}</strong>
		</label>
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			onChange={onChange}
			value={value}
			className="border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
		/>
		{subtext && (
			<p className={`m-2 ${subtext ? "text-white" : "inherit"}`}>
				<em>{subtext}</em>
			</p>
		)}
	</div>
);

export default InputGroup;
