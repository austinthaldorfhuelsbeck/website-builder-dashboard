import { PropsWithChildren } from "react";
import { IFormHookProps } from "./config/hook-config";
import { useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { InlineForm } from "../../styles/components/form.style";
import { InputGroup, TextAreaGroup } from "./components/InputGroups";
import { FormControls } from "./components/FormControls";
import {
	topicColorValidation,
	topicLabelValidation,
	topicTextValidation,
} from "./config/validation";
import { DashboardTitle } from "../common/DashboardTitle";

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
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Edit Topic</DashboardTitle>

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
		</InlineForm>
	);
}

// Export
export { TopicForm };
