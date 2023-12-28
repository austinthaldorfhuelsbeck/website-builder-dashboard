import { Link } from "react-router-dom"
import styled from "styled-components"

const SidebarContainer = styled.nav`
	min-width: 200px;
	height: 100vh;
	background-color: var(--light-grey);
	padding: 0.5rem 0;
	border-top: solid 0.1rem var(--grey);
	box-shadow: var(--box-shadow);
`

const SectionContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const SectionHeader = styled.h6`
	margin: 0.5rem;
	font-size: 80%;
	cursor: default;
`

const SectionLink = styled(Link)`
	background-color: var(--grey);
	color: var(--white);
	width: 95%;
	margin: 0.5rem 0;
	padding: 0.5rem;
	border-radius: 0 0.5rem 0.5rem 0;
	&:hover {
		background-color: var(--light-aluminum);
	}
`

export { SidebarContainer, SectionContainer, SectionHeader, SectionLink }
