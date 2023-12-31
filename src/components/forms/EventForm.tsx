import { useEffect, useState } from "react";

import ReactQuill from "react-quill";

import { useEventForm } from "../hooks/useEventForm";
import { ControlGroup, InputGroup } from "./InputGroups";
import { IApiResponse } from "../../interfaces/utils.interface";
import { IEventCategory } from "../../interfaces/objects.interface";
import { DashboardSubheader } from "../../styles/layouts/dashboard-layout.style";
import { listEventCategories } from "../../services/cl-api/event-categories.service";
import {
	FormButton,
	FormRow,
	InlineForm,
} from "../../styles/components/form.style";
import {
	eventCategoryValidation,
	eventDateValidation,
	eventLabelValidation,
	eventTextValidation,
	eventUrlValidation,
} from "./validation/validation";

// Components
function EventForm() {
	// State
	const [categories, setCategories] = useState<
		(IEventCategory | undefined)[]
	>([]);

	// Hooks
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		useEventForm();

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
		<>
			{/* <pre>{JSON.stringify(formData, null, "\t")}</pre> */}
			<InlineForm onSubmit={onSubmit} noValidate>
				<DashboardSubheader>Event</DashboardSubheader>
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
				<InputGroup
					{...eventTextValidation}
					onChange={onChange}
					value={formData.text}
				/>
				<DashboardSubheader>Content</DashboardSubheader>
				<ReactQuill onChange={onQuillChange} value={formData.content} />
				<FormRow>
					<FormButton onClick={onCancel}>Cancel</FormButton>
					<FormButton type="submit">Submit</FormButton>
					<FormButton $warning onClick={onDelete}>
						Delete
					</FormButton>
				</FormRow>
			</InlineForm>
		</>
	);
}

export { EventForm };
