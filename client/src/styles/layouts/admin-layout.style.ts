import styled from "styled-components"

const DashboardHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 1rem;
	box-shadow: var(--box-shadow);
`

const DashboardSubheader = styled.h3`
	margin: 0.5rem 0;
	cursor: default;
`

const DashboardText = styled.p``

const DashboardContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`

const DashboardSearchBar = styled.input`
	width: 100%;
`

export {
	DashboardHeaderContainer,
	DashboardSubheader,
	DashboardText,
	DashboardContentContainer,
	DashboardSearchBar,
}
