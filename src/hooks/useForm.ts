import {
	ChangeEvent,
	PropsWithChildren,
	SyntheticEvent,
	useEffect,
	useState,
} from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { warningMessage } from "../data/app-consts.data";
import { IFormHookProps } from "../interfaces/forms.interface";
import { IApiResponse } from "../interfaces/utils.interface";
import { formatEventResponse } from "../services/util.service";

// Components
function useForm({
	initialData,
	id,
	updateFunction,
	deleteFunction,
	readFunction,
}: PropsWithChildren<IFormHookProps>) {
	// Hooks
	const navigate: NavigateFunction = useNavigate();

	// State
	const [formData, setFormData] = useState<any>(initialData);

	// Handlers
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	function onQuillChange(e: any) {
		setFormData({ ...formData, content: e });
	}
	function onCancel(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		navigate("/");
	}
	async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		// create or update based on url param
		const response: IApiResponse = id
			? await updateFunction(formData, Number(id))
			: await updateFunction(formData);
		if (response.data) navigate("/");
	}
	async function onDelete(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (window.confirm(warningMessage)) {
			const response: IApiResponse = await deleteFunction(Number(id));
			if (response.data) navigate("/");
		}
	}

	// Effects
	useEffect(
		function () {
			// find resource from url param and load to form data
			// or load initial data if url param is undefined
			async function loadResource(id: number) {
				const response: IApiResponse = await readFunction(id);
				if (response.data)
					setFormData(
						response.data.date
							? formatEventResponse(response.data)
							: response.data,
					);
			}
			if (id) loadResource(Number(id));
		},
		[id, readFunction, setFormData],
	);

	return {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onCancel,
		onSubmit,
		onDelete,
	};
}

export { useForm };
