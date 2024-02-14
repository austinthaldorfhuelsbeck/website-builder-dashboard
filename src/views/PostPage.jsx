import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import ControlGroup from "../components/ControlGroup";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import TextAreaGroup from "../components/TextAreaGroup";
import usePostCategories from "../hooks/usePostCategories";
import usePostTopics from "../hooks/usePostTopics";
import {
	postCategoryValidation,
	postLabelValidation,
	postTextValidation,
	postTopicValidation,
} from "./validations/PostPage.validations";

const PostForm = ({
	initialData,
	createFunction,
	readFunction,
	updateFunction,
	deleteFunction,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { post_id } = useParams();
	const navigate = useNavigate();
	const onCancel = () => navigate(-1);
	const { topics } = usePostTopics();
	const { categories } = usePostCategories();

	return (
		<form
			onSubmit={handleSubmit(post_id ? updateFunction : createFunction)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Basic Info
				<hr />
			</h3>
			<InputGroup
				label="Post Title *"
				id="label"
				type="text"
				placeholder="Post title"
				register={register("label", { ...postLabelValidation })}
				error={errors.label}
			/>
			<div className="flex flex-row justify-start w-full">
				<ControlGroup
					label="Category *"
					id="post_category_id"
					$short
					options={categories}
					register={register("post_category_id", {
						...postCategoryValidation,
					})}
					error={errors.post_category_id}
				/>

				<ControlGroup
					label="Topic *"
					id="post_topic_id"
					$short
					options={topics}
					register={register("post_topic_id", {
						...postTopicValidation,
					})}
					error={errors.post_topic_id}
				/>
			</div>

			<h3 className="text-3xl font-bold mt-4 mb-0">
				Details
				<hr />
			</h3>
			<InputGroup
				label="Post URL"
				id="url"
				type="text"
				placeholder="Paste the full URL of the external link that clicking the post image should link to"
				register={register("url")}
				error={errors.url}
			/>
			<InputGroup
				label="Audio URL"
				id="audio"
				type="text"
				register={register("audio")}
				error={errors.audio}
			/>
			<InputGroup
				label="Video URL"
				id="video"
				type="text"
				register={register("video")}
				error={errors.video}
			/>
			<TextAreaGroup
				label="Description"
				id="text"
				type="text"
				placeholder="A short description of the post"
				register={register("text", { ...postTextValidation })}
				error={errors.text}
			/>

			<h3 className="text-3xl font-bold mt-4 mb-0">
				Content
				<hr />
			</h3>
			{/* <ReactQuill
				className="mt-4 mb-12"
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
			/> */}

			<FormControls {...{ onCancel, onDelete: deleteFunction }} />
		</form>
	);
};

export default PostForm;
