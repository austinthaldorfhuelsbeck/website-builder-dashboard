import ReactQuill from "react-quill";
import { useEventForm } from "../hooks/useEventForm";
import { ControlGroup, InputGroup } from "./InputGroups";
import {
	eventCategoryValidation,
	eventDateValidation,
	eventLabelValidation,
	eventTextValidation,
	eventUrlValidation,
} from "./validation/validation";
import { useEffect, useState } from "react";
import { IEventCategory } from "../../interfaces/objects.interface";
import { IApiResponse } from "../../interfaces/utils.interface";
import { listEventCategories } from "../../services/cl-api/event-categories.service";
import {
	FormButton,
	FormField,
	FormRow,
	InlineForm,
} from "../../styles/components/form.style";
import { DashboardSubheader } from "../../styles/layouts/admin-layout.style";

// Components
function EventForm() {
	// State
	const [options, setOptions] = useState<(IEventCategory | undefined)[]>([]);

	// Hooks
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		useEventForm();

	// Effects
	// load available category options
	useEffect(
		function () {
			async function loadCategories() {
				const response: IApiResponse = await listEventCategories();
				if (response.data) setOptions(response.data);
			}
			if (!options.length) loadCategories();
		},
		[options],
	);

	return (
		<>
			{/* <pre>{JSON.stringify(formData, null, "\t")}</pre> */}
			<DashboardSubheader>Event</DashboardSubheader>
			<InlineForm onSubmit={onSubmit} noValidate>
				<FormRow>
					<InputGroup
						{...eventLabelValidation}
						onChange={onChange}
						value={formData.label}
					/>
					<ControlGroup
						{...eventCategoryValidation}
						options={options}
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
				<FormField>
					<label htmlFor="content">
						<strong>Content</strong>
					</label>
					<ReactQuill
						onChange={onQuillChange}
						value={formData.content}
					/>
				</FormField>
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
