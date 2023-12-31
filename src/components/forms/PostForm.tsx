import { useEffect, useState } from "react";

import ReactQuill from "react-quill";

import { usePostForm } from "../hooks/usePostForm";
import { IApiResponse } from "../../interfaces/utils.interface";
import {
	ControlGroup,
	InputGroup,
	TextAreaGroup,
} from "./components/InputGroups";
import { listPostTopics } from "../../services/cl-api/post-topics.service";
import { DashboardTitle } from "../../styles/layouts/dashboard-layout.style";
import { audioCategoryId, videoCategoryId } from "../../data/app-config.data";
import { IPostCategory, IPostTopic } from "../../interfaces/objects.interface";
import { listPostCategories } from "../../services/cl-api/post-categories.service";
import { FormRow, InlineForm } from "../../styles/components/form.style";
import {
	postAudioValidation,
	postCategoryValidation,
	postLabelValidation,
	postTextValidation,
	postTopicsValidation,
	postUrlValidation,
	postVideoValidation,
} from "./validation/validation";
import { FormControls } from "./components/FormControls";

// Components
function PostForm() {
	// State
	const [categories, setCategories] = useState<(IPostCategory | undefined)[]>(
		[],
	);
	const [topics, setTopics] = useState<(IPostTopic | undefined)[]>([]);

	// Hooks
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		usePostForm();

	// Effects
	// load available category options
	useEffect(
		function () {
			async function loadCategories() {
				const response: IApiResponse = await listPostCategories();
				if (response.data) setCategories(response.data);
			}
			if (!categories.length) loadCategories();
		},
		[categories],
	);
	// load available topic options
	useEffect(
		function () {
			async function loadTopics() {
				const response: IApiResponse = await listPostTopics();
				if (response.data) setTopics(response.data);
			}
			if (!categories.length) loadTopics();
		},
		[categories],
	);

	return (
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Basic Info</DashboardTitle>
			<hr />
			<InputGroup
				{...postLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<FormRow>
				<ControlGroup
					{...postCategoryValidation}
					options={categories}
					onChange={onChange}
					value={formData.post_category_id}
				/>
				<ControlGroup
					{...postTopicsValidation}
					options={topics}
					onChange={onChange}
					value={formData.post_topic_id}
				/>
			</FormRow>
			<DashboardTitle>Details</DashboardTitle>
			<hr />
			<InputGroup
				{...postUrlValidation}
				onChange={onChange}
				value={formData.url}
			/>
			{formData.post_category_id === audioCategoryId && (
				<InputGroup
					{...postAudioValidation}
					onChange={onChange}
					value={formData.audio}
				/>
			)}
			{formData.post_category_id === videoCategoryId && (
				<InputGroup
					{...postVideoValidation}
					onChange={onChange}
					value={formData.video}
				/>
			)}
			<TextAreaGroup
				{...postTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<DashboardTitle>Content</DashboardTitle>
			<hr />
			<ReactQuill onChange={onQuillChange} value={formData.content} />
			<FormControls {...{ onCancel, onDelete }} />
		</InlineForm>
	);
}

export { PostForm };
