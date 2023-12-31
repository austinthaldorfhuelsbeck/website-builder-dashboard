import { ChangeEvent, PropsWithChildren, SyntheticEvent } from "react";
import {
	IEventCategory,
	IPostCategory,
} from "../../interfaces/objects.interface";
import { InlineForm } from "../../styles/components/form.style";
import { DashboardTitle } from "../../styles/layouts/dashboard-layout.style";
import { useEventCategoriesForm } from "../hooks/useEventCategoriesForm";
import { FormControls } from "./components/FormControls";
import { InputGroup, TextAreaGroup } from "./components/InputGroups";
import {
	categoryLabelValidation,
	categoryTextValidation,
} from "./validation/validation";
import { usePostCategoriesForm } from "../hooks/usePostCategoriesForm";

// Data
interface ComponentProps {
	formData: IEventCategory | IPostCategory;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onCancel: (e: SyntheticEvent<HTMLButtonElement>) => void;
	onSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
	onDelete: (e: SyntheticEvent<HTMLButtonElement>) => void;
}

// Components
function CategoriesForm({
	formData,
	onChange,
	onCancel,
	onSubmit,
	onDelete,
}: PropsWithChildren<ComponentProps>) {
	return (
		<InlineForm onSubmit={onSubmit} noValidate>
			<DashboardTitle>Event Category</DashboardTitle>
			<hr />
			<InputGroup
				{...categoryLabelValidation}
				onChange={onChange}
				value={formData.label}
			/>
			<TextAreaGroup
				{...categoryTextValidation}
				onChange={onChange}
				value={formData.text}
			/>
			<FormControls {...{ onCancel, onDelete }} />
		</InlineForm>
	);
}
function EventCategoriesForm() {
	// Config with custom hook
	const props: ComponentProps = useEventCategoriesForm();
	// return
	return <CategoriesForm {...props} />;
}
function PostCategoriesForm() {
	// Config with custom hook
	const props: ComponentProps = usePostCategoriesForm();
	// return
	return <CategoriesForm {...props} />;
}

// Export
export { EventCategoriesForm, PostCategoriesForm };
