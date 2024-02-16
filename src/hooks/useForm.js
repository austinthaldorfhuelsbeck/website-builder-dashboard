import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useForm = ({ create, read, update, destroy }) => {
	const { post_id, event_id, category_id, topic_id } = useParams();
	const _id = post_id || event_id || category_id || topic_id;
	const navigate = useNavigate();

	const [formData, setFormData] = useState({});
	const [error, setError] = useState("");

	// Form change event handlers
	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};
	const onQuillChange = (e) => {
		setFormData((prev) => {
			return { ...prev, content: e };
		});
	};

	// Form actions
	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = _id
				? await update(formData, _id)
				: await create(formData);
			if (res.data) navigate(-1);
			if (res.error) setError(res.error.message);
		} catch (error) {
			console.error(error);
			// setError(error.message.toString());
		}
	};
	const handleCancel = (e) => {
		e?.preventDefault();
		navigate(-1);
	};
	const handleDelete = async (e) => {
		e.preventDefault();
		if (
			window.confirm(
				"Are you sure you wish to delete? You will not be able to recover this resource.",
			)
		) {
			try {
				const res = await destroy(_id);
				if (res.data) console.log(res.data);
			} catch (error) {
				console.error(error);
				// setError(error.message.toString());
			}
		}
	};

	useEffect(() => {
		const loadEvent = async (id) => {
			try {
				const res = await read(id);
				if (res.data)
					setFormData({
						...res.data,
						date: res.data.date?.slice(0, 10),
					});
			} catch (error) {
				setError(error);
			}
		};
		if (_id) loadEvent(_id);
	}, [_id, read]);

	return {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onSubmit,
		handleCancel,
		handleDelete,
		error,
	};
};

export default useForm;
