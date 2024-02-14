import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import ControlGroup from "../components/ControlGroup";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import TextAreaGroup from "../components/TextAreaGroup";
import { initialPost } from "../data/app.data";
import useLoadForm from "../hooks/useLoadForm";
import { listPostCategories } from "../services/postCategories.service";
import { listPostTopics } from "../services/postTopics.service";
import {
	createPost,
	deletePost,
	readPost,
	updatePost,
} from "../services/posts.service";

const PostPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: initialPost });
	const { onSubmit, onCancel, onDelete, error } = useLoadForm({
		createFunction: createPost,
		readFunction: readPost,
		updateFunction: updatePost,
		deleteFunction: deletePost,
		reset,
	});

	const [categories, setCategories] = useState([]);
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		const loadCategories = async () => {
			const response = await listPostCategories();
			if (response.data) setCategories(response.data);
		};
		const loadTopics = async () => {
			const response = await listPostTopics();
			if (response.data) setTopics(response.data);
		};
		if (!categories.length) loadCategories();
		if (!topics.length) loadTopics();
	}, [categories, topics]);

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
				label="Post Title *"
				id="label"
				type="text"
				placeholder="Post title"
				register={register("label", {
					required: "Label is required",
					maxLength: {
						value: 96,
						message: "Label should be less than 100 characters.",
					},
				})}
				error={errors.label}
			/>
			<div className="flex flex-row justify-start w-full">
				<ControlGroup
					label="Category *"
					id="post_category_id"
					$short
					options={categories}
					register={register("post_category_id", {
						required: "Category is required.",
					})}
					error={errors.post_category_id}
				/>

				<ControlGroup
					label="Topic *"
					id="post_topic_id"
					$short
					options={topics}
					register={register("post_topic_id", {
						required: "Topic is required.",
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
				register={register("text")}
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

			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

export default PostPage;
