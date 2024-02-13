import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormControlsProps {
	submitFunction?: () => any;
	deleteFunction?: () => any;
}

const useFormControls = ({
	submitFunction,
	deleteFunction,
}: FormControlsProps) => {
	const navigate = useNavigate();

	const [error, setError] = useState("");

	const onCancel = () => navigate(-1);

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const onDelete = () => console.log("Deleted.");

	return { onCancel, onDelete, onSubmit, error };
};

export type { FormControlsProps };
export default useFormControls;
