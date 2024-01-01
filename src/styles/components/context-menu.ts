import styled from "styled-components";

const ContextMenuButton = styled.button`
	align-self: end;
	margin-left: auto;
	padding: 0.3rem;
	color: var(--white);
	background: none;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
`;

interface ContextMenuProps {
	x: number;
	y: number;
}
const List = styled.ul`
	list-style: none;
	padding-inline-start: 0;
`;
const ContextMenuContainer = styled(List)<ContextMenuProps>`
	position: absolute;
	left: ${(props) => `${props.x}px`};
	top: ${(props) => `${props.y}px`};
	min-width: 16rem;
	background-color: var(--aluminum);
	border-radius: 0.5rem;
	padding: 0;

	& li {
		display: flex;
		justify-content: start;
		padding: 1.5rem 1.8rem;
		cursor: pointer;
		font-size: 13px;
		letter-spacing: 0.05rem;
		line-height: 16px;

		&:hover {
			background-color: var(--light-aluminum);
			border-radius: 0.5rem;
		}
	}
`;

const ContextListItem = styled.li`
	width: 100%;
	color: var(--white);

	label {
		font-family: var(--sans-serif);
		cursor: pointer;
		padding: 0 1rem;
	}

	&:hover {
		& label {
			text-decoration-line: underline;
			text-decoration-style: solid;
			text-decoration-color: var(--white);
			text-decoration-thickness: 2px;
			text-underline-offset: 8px;
		}
	}
`;

export { ContextMenuButton, ContextMenuContainer, ContextListItem };
