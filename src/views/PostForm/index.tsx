import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { ControlGroup } from "../../components/ControlGroup";
import FormControls from "../../components/FormControls";
import InputGroup from "../../components/InputGroup";
import TextAreaGroup from "../../components/TextAreaGroup";
import { audioCategoryId, videoCategoryId } from "../../data/app-config.data";
import { initialPost } from "../../data/app-consts.data";
import { useForm } from "../../hooks/useForm";
import usePostCategories from "../../hooks/usePostCategories";
import usePostTopics from "../../hooks/usePostTopics";
import { IFormHookProps } from "../../interfaces/forms.interface";
import { deletePost, readPost, updatePost } from "../../services/posts.service";
import {
	postAudioValidation,
	postCategoryValidation,
	postLabelValidation,
	postTextValidation,
	postTopicsValidation,
	postUrlValidation,
	postVideoValidation,
} from "./PostForm.validation";

const postFormConfig: IFormHookProps = {
	initialData: initialPost,
	readFunction: readPost,
	updateFunction: updatePost,
	deleteFunction: deletePost,
};

const PostForm = () => {
	const { post_id } = useParams();
	const { formData, onChange, onQuillChange, onCancel, onSubmit, onDelete } =
		useForm({
			...postFormConfig,
			id: post_id,
		});
	const { categories } = usePostCategories();
	const { topics } = usePostTopics();

	// TODO: option selector doesn't work
	return (
		<form onSubmit={onSubmit} noValidate className="flex flex-col">
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Basic Info
				<hr />
			</h3>

			<InputGroup
				{...postLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<div className="flex flex-row justify-start w-full">
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
			</div>
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Details
				<hr />
			</h3>

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
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Content
				<hr />
			</h3>

			<ReactQuill
				className="mt-4 mb-12"
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
};

export default PostForm;
