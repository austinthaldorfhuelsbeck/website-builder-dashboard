import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { initialPost, warningMessage } from "../../data/app-consts.data";
import { useForm } from "./useForm";
import { SyntheticEvent, useEffect } from "react";
import {
	createPost,
	deletePost,
	readPost,
	updatePost,
} from "../../services/cl-api/posts.service";
import { IApiResponse } from "../../interfaces/utils.interface";

function usePostForm() {
	// Hooks
	const {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onCancel,
		onClear,
	} = useForm(initialPost);
	const navigate: NavigateFunction = useNavigate();
	const { post_id } = useParams();

	// Handlers
	async function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
		e.preventDefault();
		// create or update based on url param
		const response: IApiResponse = post_id
			? await updatePost(formData, Number(post_id))
			: await createPost(formData);
		if (response.data) navigate("/posts");
	}
	async function onDelete(e: SyntheticEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (window.confirm(warningMessage)) {
			const response: IApiResponse = await deletePost(Number(post_id));
			if (response.data) navigate("/");
		}
	}

	// Effects
	useEffect(
		function () {
			// find post from url param and load to form data
			// or load initial data if url param is undefined
			async function loadPost(id: number) {
				const response: IApiResponse = await readPost(id);
				if (response.data) setFormData(response.data);
			}
			if (post_id) {
				if (!formData.post_id) loadPost(Number(post_id));
			} else {
				// TODO: clear upon switching to new
				// onClear();
			}
		},
		[post_id, formData.post_id, onClear, setFormData],
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

export { usePostForm };
