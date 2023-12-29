import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 1rem;
	align-items: stretch;
`;

interface IGridLinkProps {
	bgColor?: string;
}
const GridCard = styled.div<IGridLinkProps>`
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : "var(--off-white)"};
	margin: 1rem 0;
	padding: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		background-color: ${(props) =>
			props.bgColor ? props.bgColor : "var(--light-grey)"};
		box-shadow: var(--box-shadow);
		color: var(--goldenrod);
	}
`;

const TagsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

interface ITagProps {
	bgColor?: string;
}
const GridTag = styled.p<ITagProps>`
	background-color: ${(props) =>
		props.bgColor ? props.bgColor : "var(--light-aluminum)"};
	color: var(--white);
	margin: 0 0.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
`;

export { GridContainer, GridCard, TagsContainer, GridTag };
