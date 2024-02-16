import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import useForm from "../hooks/useForm";
import {
	createPostTopic,
	deletePostTopic,
	readPostTopic,
	updatePostTopic,
} from "../services/postTopics.service";

// Components
const PostTopicPage = () => {
	const { formData, onChange, onSubmit, handleCancel, handleDelete, error } =
		useForm({
			create: createPostTopic,
			read: readPostTopic,
			update: updatePostTopic,
			destroy: deletePostTopic,
		});

	return (
		<form onSubmit={onSubmit} noValidate>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Topic
			</h3>

			<InputGroup
				label="Label *"
				id="label"
				type="text"
				onChange={onChange}
				value={formData.label}
			/>
			<InputGroup
				label="Color *"
				id="hex"
				type="color"
				onChange={onChange}
				value={formData.hex}
			/>
			<InputGroup
				label="Description"
				id="text"
				type="text"
				onChange={onChange}
				value={formData.text}
			/>

			<FormControls
				handleCancel={handleCancel}
				handleDelete={handleDelete}
			/>
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

// Export
export default PostTopicPage;
