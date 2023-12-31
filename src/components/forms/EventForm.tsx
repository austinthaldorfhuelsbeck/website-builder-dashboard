import { useEffect, useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

import { useForm } from "../hooks/useForm";
import { FormControls } from "./components/FormControls";
import { IApiResponse } from "../../interfaces/utils.interface";
import { IEventCategory } from "../../interfaces/objects.interface";
import { FormRow, InlineForm } from "../../styles/components/form.style";
import { DashboardTitle } from "../../styles/layouts/dashboard-layout.style";
import {
	ControlGroup,
	InputGroup,
	TextAreaGroup,
} from "./components/InputGroups";
import { listEventCategories } from "../../services/cl-api/event-categories.service";

import {
	eventCategoryValidation,
	eventDateValidation,
	eventLabelValidation,
	eventTextValidation,
	eventUrlValidation,
} from "./config/validation";
import { eventFormConfig } from "./config/hook-config";

// Components
function EventForm() {
	// Constants
	const { event_id } = useParams();

	// State
	const [categories, setCategories] = useState<
		(IEventCategory | undefined)[]
	>([]);

	// Hooks
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		useForm({
			...eventFormConfig,
			id: event_id,
		});

	// Effects
	// load available category options
	useEffect(
		function () {
			async function loadCategories() {
				const response: IApiResponse = await listEventCategories();
				if (response.data) setCategories(response.data);
			}
			if (!categories.length) loadCategories();
		},
		[categories],
	);

	return (
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Event</DashboardTitle>
			<hr />
			<FormRow>
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
			</FormRow>
			<FormRow>
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
			</FormRow>
			<TextAreaGroup
				{...eventTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<DashboardTitle>Content</DashboardTitle>
			<hr />
			<ReactQuill
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</InlineForm>
	);
}

export { EventForm };
