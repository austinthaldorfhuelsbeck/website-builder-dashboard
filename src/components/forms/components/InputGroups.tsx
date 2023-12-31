import { PropsWithChildren } from "react";
import { FormField } from "../../../styles/components/form.style";
import { DashboardText } from "../../../styles/layouts/dashboard-layout.style";

// Data
interface ComponentProps {
	name: string;
	title: string;
	$short?: boolean;
	subtext?: string;
	value: string;
	onChange: (e: any) => void;
}
interface InputProps extends ComponentProps {
	type?: string;
	placeholder?: string;
}
interface ControlProps extends ComponentProps {
	options?: any[];
}

// Components
function InputGroup({
	type,
	name,
	title,
	placeholder,
	subtext,
	$short,
	onChange,
	value,
}: PropsWithChildren<InputProps>) {
	return (
		<FormField $short={$short || false}>
			<label htmlFor={name}>
				<strong>{title}</strong>
			</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				value={value}
			/>
			{subtext && (
				<DashboardText>
					<em>{subtext}</em>
				</DashboardText>
			)}
		</FormField>
	);
}
function TextAreaGroup({
	name,
	title,
	placeholder,
	subtext,
	onChange,
	value,
}: PropsWithChildren<InputProps>) {
	return (
		<FormField>
			<label htmlFor={name}>
				<strong>{title}</strong>
			</label>
			<textarea
				placeholder={placeholder}
				name={name}
				onChange={onChange}
				value={value}
			/>
			{subtext && (
				<DashboardText>
					<em>{subtext}</em>
				</DashboardText>
			)}
		</FormField>
	);
}
function ControlGroup({
	name,
	title,
	options,
	$short,
	onChange,
	value,
}: PropsWithChildren<ControlProps>) {
	return (
		<FormField $short={$short || false}>
			<label htmlFor={name}>
				<strong>{title}</strong>
			</label>
			<select name={name} onChange={onChange} value={value}>
				{options &&
					options.map((o) => (
						<option key={o[name]} value={o[name]}>
							{o.label}
						</option>
					))}
			</select>
		</FormField>
	);
}

export { InputGroup, TextAreaGroup, ControlGroup };
