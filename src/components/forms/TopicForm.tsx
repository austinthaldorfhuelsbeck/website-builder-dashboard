import { PropsWithChildren } from "react";
import { IFormHookProps } from "./config/hook-config";
import { useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { InlineForm } from "../../styles/components/form.style";
import { DashboardTitle } from "../../styles/layouts/dashboard-layout.style";
import { InputGroup, TextAreaGroup } from "./components/InputGroups";
import { FormControls } from "./components/FormControls";
import { topicLabelValidation } from "./config/validation";

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
			<hr />
			<InputGroup
				{...topicLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<TextAreaGroup
				{...topicLabelValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</InlineForm>
	);
}

// Export
export { TopicForm };
