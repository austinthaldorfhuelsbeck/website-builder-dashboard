import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";

// Components
const TopicPage = ({
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
	const { post_topic_id } = useParams();
	const navigate = useNavigate();
	const onCancel = () => navigate(-1);

	return (
		<form
			onSubmit={handleSubmit(
				post_topic_id ? updateFunction : createFunction,
			)}
			noValidate
		>
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
			<FormControls {...{ onCancel, onDelete: deleteFunction }} />
		</form>
	);
};

// Export
export default TopicPage;
