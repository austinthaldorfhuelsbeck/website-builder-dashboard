import { PropsWithChildren } from "react";
import { FormButton, FormRow } from "../../../styles/components/form.style";

// Data
interface ComponentProps {
	onCancel: (e: any) => void;
	onDelete: (e: any) => void;
}

// Components
function FormControls({
	onCancel,
	onDelete,
}: PropsWithChildren<ComponentProps>) {
	return (
		<FormRow>
			<FormButton onClick={onCancel}>Cancel</FormButton>
			<FormButton type="submit">Submit</FormButton>
			<FormButton $warning onClick={onDelete}>
				Delete
			</FormButton>
		</FormRow>
	);
}

// Export
export { FormControls };
