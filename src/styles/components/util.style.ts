import { styled } from "styled-components";

const BlankSpan = styled.span`
	width: fit-content;
	margin: 0;
`;

const CircleImg = styled.img`
	width: 50px;
	border-radius: 100%;
	cursor: pointer;
`;

const InlineButton = styled.button`
	max-width: 10rem;
	padding: 0.5rem;
	border: none;
	border-radius: 0.5rem;
	box-shadow: var(--box-shadow);
	cursor: pointer;
`;

export { BlankSpan, CircleImg, InlineButton };
