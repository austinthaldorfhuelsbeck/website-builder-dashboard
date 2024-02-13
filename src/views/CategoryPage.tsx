import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { IFormHookProps } from "../interfaces";

// Components
const CategoryForm: FC<IFormHookProps> = (config) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const [error, setError] = useState("");

	const onCancel = () => navigate(-1);

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const onDelete = () => console.log("Deleted.");

	// Constants
	const { category_id } = useParams();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Category
				<hr />
			</h3>

			<InputGroup
				label="Label *"
				id="label"
				type="text"
				placeholder="Category name"
				register={register("label", {
					required: "Label is required.",
					maxLength: {
						value: 96,
						message: "Label should be less than 100 characters.",
					},
				})}
				error={errors.label}
			/>
			<InputGroup
				label="Description"
				id="label"
				type="text"
				placeholder="Category description"
				register={register("label", {
					maxLength: {
						value: 96,
						message: "Label should be less than 100 characters.",
					},
				})}
				error={errors.label}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
};

// Export
export default CategoryForm;
