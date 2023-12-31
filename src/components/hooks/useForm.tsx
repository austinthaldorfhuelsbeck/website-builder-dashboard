import { ChangeEvent, SyntheticEvent, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

function useForm(initialData: any) {
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
	function onClear() {
		setFormData(initialData);
	}

	return {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onCancel,
		onClear,
	};
}

export { useForm };
