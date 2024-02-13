import { PropsWithChildren, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import FormControls from "../components/FormControls";
import InputGroup from "../components/InputGroup";
import { IFormHookProps } from "../interfaces";

const DashboardHeader = styled.h3`
	font-size: 180%;
	font-weight: 900;
	margin: 1rem auto 0 1rem;
`;

// Components
const TopicForm = (config: PropsWithChildren<IFormHookProps>) => {
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

	const { topic_id } = useParams();

	return (
		<form onSubmit={handleSubmit(onSubmit)} noValidate>
			<DashboardHeader>
				Edit Topic
				<hr />
			</DashboardHeader>

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
			<FormControls {...{ onCancel, onDelete }} />
		</form>
	);
};

// Export
export default TopicForm;
