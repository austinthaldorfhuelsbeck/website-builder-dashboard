import { FC, PropsWithChildren } from "react";
import { IValidation } from "../interfaces/forms.interface";

// Data interfaces
interface InputProps extends IValidation {
	value: string;
	onChange: (e: any) => void;
}

// TextAreaGroup component
const TextAreaGroup: FC<PropsWithChildren<InputProps>> = ({
	name,
	title,
	placeholder,
	subtext,
	onChange,
	value,
}) => (
	<div className="flex flex-col m-4 mr-0 w-full">
		<label htmlFor={name}>
			<strong>{title}</strong>
		</label>
		<textarea
			placeholder={placeholder}
			name={name}
			onChange={onChange}
			value={value}
			className="border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:outline-none"
		/>
		{subtext && (
			<p className="m-2">
				<em>{subtext}</em>
			</p>
		)}
	</div>
);

export default TextAreaGroup;
