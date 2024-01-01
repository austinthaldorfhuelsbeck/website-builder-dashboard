import styled from "styled-components";

const InlineForm = styled.form``;

const FormRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 100%;
`;

interface FieldProps {
	$short?: boolean;
}
const FormField = styled.div<FieldProps>`
	display: flex;
	flex-direction: column;
	margin: 1rem 1rem 1rem 0;
	width: 100%;
	max-width: ${(props) => (props.$short ? "18rem" : "none")};
`;

interface ButtonProps {
	$warning?: boolean;
}
const FormButton = styled.button<ButtonProps>`
	font-family: var(--font-secondary);
	margin: 0.5rem;
	margin-left: ${(props) => (props.$warning ? "auto" : "0.5rem")};
	padding: 0.5rem;
	cursor: pointer;
	background-color: ${(props) =>
		props.$warning ? "var(--red)" : "var(--light-grey)"};
	color: ${(props) => (props.$warning ? "var(--white)" : "var(--black)")};
	border: none;
	box-shadow: var(--box-shadow);
	border-radius: 0.5rem;
`;

export { InlineForm, FormRow, FormField, FormButton };
