import { useForm } from "react-hook-form";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { initialCategory } from "../data/app.data";
import useLoadForm from "../hooks/useLoadForm";
import {
	createEventCategory,
	deleteEventCategory,
	readEventCategory,
	updateEventCategory,
} from "../services/eventCategories.service";

// Components
const EventCategoryPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: initialCategory });
	const { onSubmit, onCancel, onDelete, error } = useLoadForm({
		createFunction: createEventCategory,
		readFunction: readEventCategory,
		updateFunction: updateEventCategory,
		deleteFunction: deleteEventCategory,
		reset,
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Event Category
				<hr />
			</h3>

			<InputGroup
				label="Category Title *"
				id="label"
				type="text"
				placeholder="Name of the category"
				register={register("label", {
					required: "Label is required",
					maxLength: {
						value: 96,
						message: "Label should be less than 100 characters.",
					},
				})}
				error={errors.label}
			/>
			<InputGroup
				label="Description"
				id="text"
				type="text"
				placeholder="Category description"
				register={register("text", {
					maxLength: {
						value: 96,
						message:
							"Description should be less than 100 characters.",
					},
				})}
				error={errors.text}
			/>
			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

// Export
export default EventCategoryPage;
