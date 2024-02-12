import { FC, PropsWithChildren } from "react";
import { IValidation } from "../interfaces/forms.interface";

// Data interfaces
interface ControlProps extends IValidation {
	value: string;
	onChange: (e: any) => void;
}

// ControlGroup component
const ControlGroup: FC<PropsWithChildren<ControlProps>> = ({
	name,
	title,
	options,
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
		<select
			name={name}
			onChange={onChange}
			value={value}
			className="select-class" // Replace 'select-class' with actual Tailwind classes
		>
			{options?.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</div>
);

export { ControlGroup };
