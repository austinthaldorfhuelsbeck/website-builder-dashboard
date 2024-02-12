import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import FormControls from "../../components/FormControls";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import { useForm } from "../../hooks/useForm";
import { IFormHookProps } from "../../interfaces/forms.interface";
import {
	topicColorValidation,
	topicLabelValidation,
	topicTextValidation,
} from "./TopicForm.validation";

const DashboardHeader = styled.h3`
	font-size: 180%;
	font-weight: 900;
	margin: 1rem auto 0 1rem;
`;

// Components
function TopicForm(config: PropsWithChildren<IFormHookProps>) {
	// Constants
	const { topic_id } = useParams();

	// Hooks
	const { formData, onChange, onSubmit, onCancel, onDelete } = useForm({
		...config,
		id: topic_id,
	});

	return (
		<form onSubmit={onSubmit} noValidate>
			<DashboardHeader>
				Edit Topic
				<hr />
			</DashboardHeader>

			<InputGroup
				{...topicLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<InputGroup
				{...topicColorValidation}
				onChange={onChange}
				value={formData.hex}
			/>
			<TextAreaGroup
				{...topicTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
}

// Export
export { TopicForm };
