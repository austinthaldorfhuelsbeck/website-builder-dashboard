import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled, { keyframes } from "styled-components"

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

const PageContent = styled.div`
	flex-basis: auto;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	margin: 1rem;
	width: 80%;
`;

const spinAnimation = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(720deg); }
`
const Loader = styled(FontAwesomeIcon)`
	font-size: 500%;
	margin: auto;
	animation-name: ${spinAnimation};
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
`

export { PageContainer, PageContent, Loader }
