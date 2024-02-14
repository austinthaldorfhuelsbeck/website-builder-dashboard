import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import FormControls from "../components/FormControls";

import { useForm } from "react-hook-form";
import InputGroup from "../components/InputGroup";
import { initialEvent } from "../data/app.data";
import useLoadForm from "../hooks/useLoadForm";
import { listEventCategories } from "../services/eventCategories.service";
import {
	createEvent,
	deleteEvent,
	readEvent,
	updateEvent,
} from "../services/events.service";

const EventPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: initialEvent });
	const { onSubmit, onCancel, onDelete, error } = useLoadForm({
		createFunction: createEvent,
		readFunction: readEvent,
		updateFunction: updateEvent,
		deleteFunction: deleteEvent,
		reset,
	});

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listEventCategories();
			if (response.data) setCategories(response.data);
		};
		if (!categories.length) loadCategories();
	}, [categories]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Event
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

			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

export default EventPage;
