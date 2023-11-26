import styled from "styled-components"

const DashboardHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 1rem;
	box-shadow: var(--box-shadow);
`

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
	DashboardContentContainer,
	DashboardSearchBar,
}
