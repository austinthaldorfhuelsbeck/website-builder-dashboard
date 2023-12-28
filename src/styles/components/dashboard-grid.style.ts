import { Link } from "react-router-dom"
import styled from "styled-components"

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 1rem;
	align-items: stretch;
`

const GridLink = styled(Link)`
	background-color: var(--off-white);
	margin: 1rem 0;
	padding: 0.5rem;
	border-radius: 0.5rem;
	&:hover {
		background-color: var(--light-grey);
		box-shadow: var(--box-shadow);
		color: var(--goldenrod);
	}
`

const TagsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`

const GridTag = styled.p`
	background-color: var(--light-aluminum);
	color: var(--white);
	margin: 0 0.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
`

export { GridContainer, GridLink, TagsContainer, GridTag }
