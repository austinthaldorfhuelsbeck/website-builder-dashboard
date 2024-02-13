import { useState } from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { usePostCategories, usePostTopics } from "../hooks/useLoadResource";

const PostForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const [error, setError] = useState("");

	const onCancel = () => navigate(-1);

	const onSubmit = (data: any) => {
		console.log(data);
	};

	const onDelete = () => console.log("Deleted.");

	const { post_id } = useParams();

	const { categories } = usePostCategories();
	const { topics } = usePostTopics();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col"
		>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Basic Info
				<hr />
			</h3>

			<InputGroup
				label="Label *"
				id="label"
				type="text"
				register={register("label", {
					required: "Label is required.",
					maxLength: {
						value: 96,
						message: "Label should be less than 100 characters.",
					},
				})}
				error={errors.label}
			/>
			<div className="flex flex-row justify-start w-full">
				{/* <ControlGroup
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
				/> */}
			</div>
			<h3 className="text-3xl font-bold mt-4 mb-0">
				Details
				<hr />
			</h3>

			<InputGroup
				label="Post URL"
				id="url"
				type="text"
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
			{/* <TextAreaGroup
				{...postTextValidation}
				onChange={onChange}
				value={formData.text}
			/> */}
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
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
};

export default PostForm;
