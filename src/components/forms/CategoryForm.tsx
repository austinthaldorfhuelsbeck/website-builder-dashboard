import { PropsWithChildren } from "react";

import { useParams } from "react-router-dom";

import { useForm } from "../hooks/useForm";
import { IFormHookProps } from "./config/hook-config";
import { FormControls } from "./components/FormControls";
import { InlineForm } from "../../styles/components/form.style";
import { InputGroup, TextAreaGroup } from "./components/InputGroups";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./config/validation";
import { DashboardTitle } from "../common/DashboardTitle";

// Components
function CategoryForm(config: PropsWithChildren<IFormHookProps>) {
	// Constants
	const { category_id } = useParams();

	// Hooks
	const { formData, onChange, onSubmit, onCancel, onDelete } = useForm({
		...config,
		id: category_id,
	});

	return (
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Edit Category</DashboardTitle>

			<InputGroup
				{...categoryLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<TextAreaGroup
				{...categoryTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</InlineForm>
	);
}

// Export
export { CategoryForm };
