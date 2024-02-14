import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";

import FormControls from "../components/FormControls";

import { useForm } from "react-hook-form";
import InputGroup from "../components/InputGroup";

const EventPage = ({
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
	const { event_id } = useParams();
	const navigate = useNavigate();
	const onCancel = () => navigate(-1);

	return (
		<form
			onSubmit={handleSubmit(event_id ? updateFunction : createFunction)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Event
				<hr />
			</h3>

			<div className="flex flex-row justify-start w-full">
				<InputGroup
					label="Event Name *"
					id="label"
					type="text"
					register={register("label", {
						required: "Event name is required.",
						maxLength: {
							value: 96,
							message:
								"Label should be less than 100 characters.",
						},
					})}
					error={errors.label}
				/>
				{/* <ControlGroup
					{...eventCategoryValidation}
					options={categories}
					onChange={onChange}
					value={formData.event_category_id}
				/> */}
			</div>
			<div className="flex flex-row justify-start w-full">
				<InputGroup
					label="Date *"
					id="date"
					type="date"
					register={register("date", {
						required: "Event date is required.",
					})}
					error={errors.date}
				/>
				<InputGroup
					label="Description"
					id="text"
					type="text"
					register={register("text")}
					error={errors.date}
				/>
			</div>
			{/* <TextAreaGroup
				{...eventTextValidation}
				onChange={onChange}
				value={formData.text}
			/> */}
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Content
				<hr />
			</h3>

			{/* <ReactQuill
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
				className="mb-12"
			/> */}
			<FormControls {...{ onCancel, onDelete: deleteFunction }} />
		</form>
	);
};

export default EventPage;
