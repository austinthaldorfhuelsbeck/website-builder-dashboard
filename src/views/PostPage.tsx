import { FC } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import ControlGroup from "../components/ControlGroup";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import TextAreaGroup from "../components/TextAreaGroup";
import { usePostTopics } from "../hooks/useLoadResource";
import { IFormHookProps } from "../interfaces";
import {
	postAudioOptions,
	postLabelOptions,
	postTextOptions,
	postUrlOptions,
	postVideoOptions,
} from "./options/PostPage.options";
import {
	postLabelValidation,
	postTextValidation,
} from "./validations/PostPage.options";

const PostForm: FC<IFormHookProps> = ({
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
				{...postLabelOptions}
				register={register("label", { ...postLabelValidation })}
				error={errors.label}
			/>
			<div className="flex flex-row justify-start w-full">
				{/* <ControlGroup
					options={categories}
					register={register("url")}
					error={errors.url}
				/> */}
				<ControlGroup
					options={topics}
					register={register("post_topic_id")}
					error={errors.url}
				/>
			</div>

			<h3 className="text-3xl font-bold mt-4 mb-0">
				Details
				<hr />
			</h3>
			<InputGroup
				{...postUrlOptions}
				register={register("url")}
				error={errors.url}
			/>
			<InputGroup
				{...postAudioOptions}
				register={register("audio")}
				error={errors.audio}
			/>
			<InputGroup
				{...postVideoOptions}
				register={register("video")}
				error={errors.video}
			/>
			<TextAreaGroup
				{...postTextOptions}
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
