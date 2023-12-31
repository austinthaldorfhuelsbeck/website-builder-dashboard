import { SyntheticEvent, useEffect } from "react";

import { useQuill } from "react-quilljs";
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
import { IEvent } from "../../interfaces/objects.interface";
import { initialEvent } from "../../data/initial.data";

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
		// append formatted html from quill
		const event: IEvent = formData;
		console.log("Event: ", event, "id: ", event_id);
		// create or update based on url param
		const response: IApiResponse = event_id
			? await updateEvent(event, Number(event_id))
			: await createEvent(event);
		console.log("Response: ", response);
		if (response.data) navigate("/events");
	}
	async function onDelete(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (
			window.confirm(
				"Delete this event? You will not be able to recover it.",
			)
		) {
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
					setFormData({
						...response.data,
						date: response.data.date.slice(0, 10),
					});
			}
			if (event_id) {
				if (!formData.event_id) loadEvent(Number(event_id));
			} else {
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
