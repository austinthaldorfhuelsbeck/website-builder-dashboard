import { InlineForm } from "../../styles/components/form.style";
import { DashboardTitle } from "../../styles/layouts/dashboard-layout.style";
import { usePostCategoriesForm } from "../hooks/usePostCategoriesForm";
import { FormControls } from "./components/FormControls";
import { InputGroup, TextAreaGroup } from "./components/InputGroups";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./validation/validation";

// Components
function PostCategoriesForm() {
	// Hooks
	const { formData, onChange, onCancel, onSubmit, onDelete } =
		usePostCategoriesForm();

	return (
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Post Category</DashboardTitle>
			<hr />
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
export { PostCategoriesForm };
