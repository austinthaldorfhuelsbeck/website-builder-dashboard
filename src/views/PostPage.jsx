import { useEffect, useState } from "react";

import ReactQuill from "react-quill";

import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import SelectGroup from "../components/SelectGroup";
import TextAreaGroup from "../components/TextAreaGroup";
import useForm from "../hooks/useForm";
import useUpload from "../hooks/useUpload";
import { listPostCategories } from "../services/postCategories.service";
import { listPostTopics } from "../services/postTopics.service";
import {
	createPost,
	deletePost,
	readPost,
	updatePost,
} from "../services/posts.service";

import "react-quill/dist/quill.snow.css";
import UploadGroup from "../components/UploadGroup";

const PostPage = () => {
	const {
		formData,
		setFormData,
		onChange,
		onQuillChange,
		onSubmit,
		handleCancel,
		handleDelete,
		error,
	} = useForm({
		create: createPost,
		read: readPost,
		update: updatePost,
		destroy: deletePost,
	});

	const imageUpload = useUpload();
	const audioUpload = useUpload();
	const videoUpload = useUpload();

	const [categories, setCategories] = useState([]);
	const [topics, setTopics] = useState([]);

	// load options for control groups
	useEffect(() => {
		const loadCategories = async () => {
			try {
				const response = await listPostCategories();
				if (response.data) setCategories(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		const loadTopics = async () => {
			try {
				const response = await listPostTopics();
				if (response.data) setTopics(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		if (!categories.length) loadCategories();
		if (!topics.length) loadTopics();
	}, [categories, topics]);

	// set form data when upload completes
	useEffect(() => {
		if (imageUpload.fileUrl)
			setFormData((prev) => {
				return { ...prev, img: imageUpload.fileUrl };
			});
		if (audioUpload.fileUrl)
			setFormData((prev) => {
				return { ...prev, audio: audioUpload.fileUrl };
			});
		if (videoUpload.fileUrl)
			setFormData((prev) => {
				return { ...prev, video: videoUpload.fileUrl };
			});
	}, [
		audioUpload.fileUrl,
		videoUpload.fileUrl,
		setFormData,
		imageUpload.fileUrl,
	]);

	return (
		<form onSubmit={onSubmit} noValidate className="w-full">
			<h3 className="text-3xl font-bold mt-4 mb-0">Basic Post Info</h3>
			<InputGroup
				label="Post Title *"
				id="label"
				type="text"
				placeholder="Post title"
				onChange={onChange}
				value={formData.label}
			/>
			<div className="flex flex-row justify-start w-full">
				<SelectGroup
					label="Category *"
					id="post_category_id"
					$short
					options={categories}
					onChange={onChange}
					value={formData.post_category_id}
				/>

				<SelectGroup
					label="Topic *"
					id="post_topic_id"
					$short
					options={topics}
					onChange={onChange}
					value={formData.post_topic_id}
				/>
			</div>

			<h3 className="text-3xl font-bold mt-4 mb-0">Details</h3>
			<InputGroup
				label="Post URL"
				id="url"
				type="text"
				placeholder="Paste the full URL of the external link that clicking the post image should link to (optional)"
				onChange={onChange}
				value={formData.url}
			/>

			<label className="ml-4 text-sm font-semibold text-gray-500">
				Background Image
			</label>
			<UploadGroup
				label="Upload an Image File"
				id="img"
				accept="image/*"
				type="file"
				percent={imageUpload.percent}
				onChange={imageUpload.onFileChange}
				value={formData.img}
			/>

			<label className="ml-4 text-sm font-semibold text-gray-500">
				Optional Files
			</label>
			<div className="flex">
				<UploadGroup
					label="Upload an Audio File"
					id="audio"
					accept="audio/*"
					type="file"
					percent={audioUpload.percent}
					onChange={audioUpload.onFileChange}
					value={formData.audio}
				/>

				<UploadGroup
					label="Upload a Video File"
					id="video"
					accept="video/*"
					type="file"
					percent={videoUpload.percent}
					onChange={videoUpload.onFileChange}
					value={formData.video}
				/>
			</div>
			{audioUpload.uploadError && (
				<div className="bg-red-300">{audioUpload.uploadError}</div>
			)}
			{videoUpload.uploadError && (
				<div className="bg-red-300">{videoUpload.uploadError}</div>
			)}

			<TextAreaGroup
				label="Description"
				id="text"
				type="text"
				placeholder="A short description of the post"
				onChange={onChange}
				value={formData.text}
			/>

			<h3 className="text-3xl font-bold mt-4 mb-0">Content</h3>
			<ReactQuill
				className="mt-4 mb-12"
				theme="snow"
				onChange={onQuillChange}
				value={formData.content}
			/>

			<FormControls
				handleCancel={handleCancel}
				handleDelete={handleDelete}
			/>
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

export default PostPage;
