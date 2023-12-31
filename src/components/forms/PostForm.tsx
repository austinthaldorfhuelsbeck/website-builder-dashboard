import { useEffect, useState } from "react";
import { IPostCategory, IPostTopic } from "../../interfaces/objects.interface";
import { usePostForm } from "../hooks/usePostForm";
import { IApiResponse } from "../../interfaces/utils.interface";
import { listPostCategories } from "../../services/cl-api/post-categories.service";
import { listPostTopics } from "../../services/cl-api/post-topics.service";
import {
	DashboardSubheader,
	DashboardText,
} from "../../styles/layouts/admin-layout.style";
import {
	FormButton,
	FormRow,
	InlineForm,
} from "../../styles/components/form.style";
import { ControlGroup, InputGroup, TextAreaGroup } from "./InputGroups";
import {
	postAudioValidation,
	postCategoryValidation,
	postLabelValidation,
	postTextValidation,
	postTopicsValidation,
	postUrlValidation,
	postVideoValidation,
} from "./validation/validation";
import ReactQuill from "react-quill";
import { audioCategoryId, videoCategoryId } from "../../data/app-config.data";

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
		<>
			{/* <pre>{JSON.stringify(formData, null, "\t")}</pre> */}
			<InlineForm onSubmit={onSubmit} noValidate>
				<DashboardSubheader>Basic Info</DashboardSubheader>
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
				<DashboardSubheader>Details</DashboardSubheader>
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
				<DashboardSubheader>Content</DashboardSubheader>
				<ReactQuill onChange={onQuillChange} value={formData.content} />
				<FormRow>
					<FormButton onClick={onCancel}>Cancel</FormButton>
					<FormButton type="submit">Submit</FormButton>
					<FormButton $warning onClick={onDelete}>
						Delete
					</FormButton>
				</FormRow>
			</InlineForm>
		</>
	);
}

export { PostForm };
