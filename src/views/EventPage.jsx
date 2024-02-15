import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

import FormControls from "../components/FormControls";

import ReactQuill from "react-quill";
import InputGroup from "../components/InputGroup";
import SelectGroup from "../components/SelectGroup";
import TextAreaGroup from "../components/TextAreaGroup";
import useForm from "../hooks/useForm";
import { listEventCategories } from "../services/eventCategories.service";
import {
	createEvent,
	deleteEvent,
	readEvent,
	updateEvent,
} from "../services/events.service";

const EventPage = () => {
	const {
		formData,
		onChange,
		onQuillChange,
		onSubmit,
		onCancel,
		onDelete,
		error,
	} = useForm({
		create: createEvent,
		read: readEvent,
		update: updateEvent,
		destroy: deleteEvent,
	});

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const res = await listEventCategories();
			if (res.data) setCategories(res.data);
		};
		if (!categories.length) loadCategories();
	}, [categories.length]);

	return (
		<form onSubmit={onSubmit} noValidate className="flex flex-col">
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Event
				<hr />
			</h3>

			<InputGroup
				label="Event Name *"
				id="label"
				type="text"
				onChange={onChange}
				value={formData.label}
			/>
			<div className="flex flex-row justify-start gap-5 w-full">
				<SelectGroup
					label="Category *"
					id="event_category_id"
					short
					options={categories}
					onChange={onChange}
					value={formData.event_category_id}
				/>
				<InputGroup
					label="Date *"
					id="date"
					type="date"
					onChange={onChange}
					value={formData.date}
				/>
			</div>
			<TextAreaGroup
				label="Description"
				id="text"
				type="text"
				onChange={onChange}
				value={formData.text}
			/>
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Content
				<hr />
			</h3>

			<pre>{JSON.stringify(formData, null, "\t")}</pre>

			<ReactQuill
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
				className="mb-12"
			/>

			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

export default EventPage;
