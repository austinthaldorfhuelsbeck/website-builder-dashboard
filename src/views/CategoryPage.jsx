import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./validations/CategoryPage.validations";

// Components
const CategoryPage = ({
	initialData,
	createFunction,
	readFunction,
	updateFunction,
	deleteFunction,
}) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: initialData,
	});
	const { category_id } = useParams();
	const navigate = useNavigate();
	const onGoBack = (e) => {
		e?.preventDefault();
		navigate(-1);
	};

	const [error, setError] = useState("");

	const onSubmit = async (data) => {
		const res = category_id
			? await updateFunction(data, category_id)
			: await createFunction(data);
		if (res.data) {
			onGoBack();
		} else if (res.error) {
			setError(res.error?.message);
			console.log(res.error);
		}
	};

	const onDelete = async () => {
		console.log("You sure?");
	};

	useEffect(() => {
		const loadCategory = async (id) => {
			const res = await readFunction(id);
			if (res.data) reset(res.data);
		};
		if (category_id) loadCategory(category_id);
	}, [category_id, readFunction, reset]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				{category_id ? "Edit Category" : "Create Category"}
				<hr />
			</h3>

			<InputGroup
				label="Category Title *"
				id="label"
				type="text"
				placeholder="Name of the category"
				register={register("label", { ...categoryLabelValidation })}
				error={errors.label}
			/>
			<InputGroup
				label="Description"
				id="text"
				type="text"
				placeholder="Category description"
				register={register("text", { ...categoryTextValidation })}
				error={errors.text}
			/>
			<FormControls onCancel={onGoBack} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

// Export
export default CategoryPage;
