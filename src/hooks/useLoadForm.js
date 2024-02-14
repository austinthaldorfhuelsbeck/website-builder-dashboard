import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useLoadForm = ({
	createFunction,
	readFunction,
	updateFunction,
	deleteFunction,
	reset,
}) => {
	const { post_id, event_id, category_id, topic_id } = useParams();
	const _id = post_id || event_id || category_id || topic_id;
	const navigate = useNavigate();

	const [error, setError] = useState("");

	const onSubmit = async (data) => {
		const res = _id
			? await updateFunction(data, _id)
			: await createFunction(data);
		if (res.data) {
			onCancel();
		} else if (res.error) {
			setError(res.error?.message);
		}
	};

	const onCancel = (e) => {
		e?.preventDefault();
		navigate(-1);
	};

	const onDelete = async (e) => {
		e.preventDefault();
		if (
			window.confirm(
				"Are you sure you wish to delete? You will not be able to recover this resource.",
			)
		) {
			const res = await deleteFunction(_id);
			if (res) onCancel();
		}
	};

	useEffect(() => {
		const load = async (id) => {
			const res = await readFunction(id);
			if (res.data) reset(res.data);
		};
		if (_id) load(_id);
	}, [_id, readFunction, reset]);

	return { onSubmit, onCancel, onDelete, error };
};

export default useLoadForm;
