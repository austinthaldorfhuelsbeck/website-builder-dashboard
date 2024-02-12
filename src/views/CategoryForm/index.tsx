import { FC } from "react";
import { useParams } from "react-router-dom";
import FormControls from "../../components/FormControls";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import { useForm } from "../../hooks/useForm";
import { IFormHookProps } from "../../interfaces/forms.interface";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./CategoryForm.validation";

// Components
const CategoryForm: FC<IFormHookProps> = (config) => {
	// Constants
	const { category_id } = useParams();

	// Hooks
	const { formData, onChange, onSubmit, onCancel, onDelete } = useForm({
		...config,
		id: category_id,
	});

	return (
		<form onSubmit={onSubmit} noValidate className="flex flex-col">
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Category
				<hr />
			</h3>

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
		</form>
	);
};

// Export
export default CategoryForm;
