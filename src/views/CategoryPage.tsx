import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { IFormHookProps } from "../interfaces";
import {
	categoryLabelOptions,
	categoryTextOptions,
} from "./options/CategoryPage.options";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./validations/CategoryPage.validations";

// Components
const CategoryPage: FC<IFormHookProps> = ({
	initialData,
	createFunction,
	readFunction,
	updateFunction,
	deleteFunction,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { category_id } = useParams();
	const navigate = useNavigate();
	const onCancel = () => navigate(-1);

	return (
		<form
			onSubmit={handleSubmit(
				category_id ? updateFunction : createFunction,
			)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Category
				<hr />
			</h3>

			<InputGroup
				{...categoryLabelOptions}
				register={register("label", { ...categoryLabelValidation })}
				error={errors.label}
			/>
			<InputGroup
				{...categoryTextOptions}
				register={register("label", { ...categoryTextValidation })}
				error={errors.label}
			/>
			<FormControls {...{ onCancel, onDelete: deleteFunction }} />
		</form>
	);
};

// Export
export default CategoryPage;
