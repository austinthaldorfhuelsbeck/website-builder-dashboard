import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { initialCategory, warningMessage } from "../../data/app-consts.data";
import { useForm } from "./useForm";
import { SyntheticEvent, useEffect } from "react";
import { IApiResponse } from "../../interfaces/utils.interface";
import { deleteEvent } from "../../services/cl-api/events.service";
import {
	createEventCategory,
	readEventCategory,
	updateEventCategory,
} from "../../services/cl-api/event-categories.service";

function useEventCategoriesForm() {
	// Hooks
	const { formData, setFormData, onChange, onCancel } =
		useForm(initialCategory);
	const navigate: NavigateFunction = useNavigate();
	const { event_category_id } = useParams();

	// Handlers
	async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		// create or update based on url params
		const response: IApiResponse = event_category_id
			? await updateEventCategory(formData, Number(event_category_id))
			: await createEventCategory(formData);
		if (response.data) navigate("/post_categories");
	}
	async function onDelete(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (window.confirm(warningMessage)) {
			const response: IApiResponse = await deleteEvent(
				Number(event_category_id),
			);
			if (response.data) navigate("/post_categories");
		}
	}

	// Effect
	useEffect(
		function () {
			// find category from url param and load to form data
			// or load initial data if url param is undefined
			async function loadCategory(id: number) {
				const response: IApiResponse = await readEventCategory(id);
				if (response.data) setFormData(response.data);
			}
			if (event_category_id && !formData.event_category_id)
				loadCategory(Number(event_category_id));
			// TODO: clear upon switching to new
		},
		[formData.event_category_id, event_category_id, setFormData],
	);

	// Export
	return {
		formData,
		onChange,
		onCancel,
		onSubmit,
		onDelete,
	};
}

export { useEventCategoriesForm };
