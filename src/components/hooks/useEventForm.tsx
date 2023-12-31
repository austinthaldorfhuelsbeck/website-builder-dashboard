import { SyntheticEvent, useEffect } from "react";

import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

import { useForm } from "./useForm";
import { IApiResponse } from "../../interfaces/utils.interface";
import {
	createEvent,
	deleteEvent,
	readEvent,
	updateEvent,
} from "../../services/cl-api/events.service";

import "quill/dist/quill.snow.css";
import { initialEvent, warningMessage } from "../../data/app-consts.data";
import { formatEventResponse } from "../../services/util.service";

function useEventForm() {
	// Hooks
	const {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onCancel,
		onClear,
	} = useForm(initialEvent);
	const navigate: NavigateFunction = useNavigate();
	const { event_id } = useParams();

	// Handlers
	async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		// create or update based on url param
		const response: IApiResponse = event_id
			? await updateEvent(formData, Number(event_id))
			: await createEvent(formData);
		if (response.data) navigate("/events");
	}
	async function onDelete(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (window.confirm(warningMessage)) {
			const response: IApiResponse = await deleteEvent(Number(event_id));
			if (response.data) navigate("/");
		}
	}

	// Effects
	useEffect(
		function () {
			// find event from url param and load to form data
			// or load initial data if url param is undefined
			async function loadEvent(id: number) {
				const response: IApiResponse = await readEvent(id);
				if (response.data)
					setFormData(formatEventResponse(response.data));
			}
			if (event_id) {
				if (!formData.event_id) loadEvent(Number(event_id));
			} else {
				// TODO: clear upon switching to new
				// onClear();
			}
		},
		[event_id, formData.event_id, onClear, setFormData],
	);

	// Export
	return {
		formData,
		onChange,
		onQuillChange,
		onCancel,
		onSubmit,
		onDelete,
	};
}

export { useEventForm };
