import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import useForm from "../hooks/useForm";
import {
	createPostCategory,
	deletePostCategory,
	readPostCategory,
	updatePostCategory,
} from "../services/postCategories.service";

// Components
const PostCategoryPage = () => {
	const { formData, onChange, onSubmit, onCancel, onDelete, error } = useForm(
		{
			create: createPostCategory,
			read: readPostCategory,
			update: updatePostCategory,
			destroy: deletePostCategory,
		},
	);

	return (
		<form onSubmit={onSubmit} noValidate className="flex flex-col">
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Post Category
			</h3>

			<InputGroup
				label="Category Title *"
				id="label"
				type="text"
				placeholder="Name of the category"
				onChange={onChange}
				value={formData.label}
			/>
			<InputGroup
				label="Description"
				id="text"
				type="text"
				placeholder="Category description"
				onChange={onChange}
				value={formData.text}
			/>

			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

// Export
export default PostCategoryPage;
