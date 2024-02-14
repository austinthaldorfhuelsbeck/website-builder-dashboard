import { useForm } from "react-hook-form";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { initialTopic } from "../data/app.data";
import useLoadForm from "../hooks/useLoadForm";
import {
	createPostTopic,
	deletePostTopic,
	readPostTopic,
	updatePostTopic,
} from "../services/postTopics.service";

// Components
const PostTopicPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: initialTopic });
	const { onSubmit, onCancel, onDelete, error } = useLoadForm({
		createFunction: createPostTopic,
		readFunction: readPostTopic,
		updateFunction: updatePostTopic,
		deleteFunction: deletePostTopic,
		reset,
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<h3 className="text-3xl font-bold m-auto mt-4 mb-0 ml-4">
				Edit Topic
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
			<InputGroup
				label="Color *"
				id="hex"
				type="color"
				register={register("hex", {
					required: "Color is required.",
				})}
				error={errors.label}
			/>
			<InputGroup
				label="Description"
				id="text"
				type="text"
				register={register("text")}
				error={errors.label}
			/>
			{/* <TextAreaGroup
				{...topicTextValidation}
				onChange={onChange}
				value={formData.text}
			/> */}

			<FormControls onCancel={onCancel} onDelete={onDelete} />
			{error && <div className="bg-red-300">{error}</div>}
		</form>
	);
};

// Export
export default PostTopicPage;
