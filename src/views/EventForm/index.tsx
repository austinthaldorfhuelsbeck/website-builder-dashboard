import { FC } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

import { ControlGroup } from "../../components/ControlGroup";
import FormControls from "../../components/FormControls";
import { useForm } from "../../hooks/useForm";

import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import { initialEvent } from "../../data/app-consts.data";
import useEventCategories from "../../hooks/useEventCategories";
import { IFormHookProps } from "../../interfaces/forms.interface";
import {
	deleteEvent,
	readEvent,
	updateEvent,
} from "../../services/events.service";
import {
	eventCategoryValidation,
	eventDateValidation,
	eventLabelValidation,
	eventTextValidation,
	eventUrlValidation,
} from "./EventForm.validation";

// Config
const eventFormConfig: IFormHookProps = {
	initialData: initialEvent,
	readFunction: readEvent,
	updateFunction: updateEvent,
	deleteFunction: deleteEvent,
};

const EventForm: FC = () => {
	const { event_id } = useParams();
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		useForm({
			...eventFormConfig,
			id: event_id,
		});
	const { categories } = useEventCategories();

	return (
		<form onSubmit={onSubmit} noValidate className="flex flex-col">
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Event
				<hr />
			</h3>

			<div className="flex flex-row justify-start w-full">
				<InputGroup
					{...eventLabelValidation}
					onChange={onChange}
					value={formData.label}
				/>
				<ControlGroup
					{...eventCategoryValidation}
					options={categories}
					onChange={onChange}
					value={formData.event_category_id}
				/>
			</div>
			<div className="flex flex-row justify-start w-full">
				<InputGroup
					{...eventDateValidation}
					onChange={onChange}
					value={formData.date}
				/>
				<InputGroup
					{...eventUrlValidation}
					onChange={onChange}
					value={formData.url}
				/>
			</div>
			<TextAreaGroup
				{...eventTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Content
				<hr />
			</h3>

			<ReactQuill
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
				className="mb-12"
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
};

export default EventForm;
