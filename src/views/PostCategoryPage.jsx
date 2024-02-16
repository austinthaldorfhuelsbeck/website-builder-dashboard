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
	const { formData, onChange, onSubmit, handleCancel, handleDelete, error } =
		useForm({
			create: createPostCategory,
			read: readPostCategory,
			update: updatePostCategory,
			destroy: deletePostCategory,
		});

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

			<FormControls
				handleCancel={handleCancel}
				handleDelete={handleDelete}
			/>
			{error && (
				<div className="m-3 mr-auto px-3 py-1 bg-red-300 rounded-md">
					{error}
				</div>
			)}
		</form>
	);
};

// Export
export default PostCategoryPage;
