import styled from "styled-components";

const DashboardHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 1rem;
	box-shadow: var(--box-shadow);
`;

const DashboardHeader = styled.h3`
	font-size: 180%;
	font-weight: 900;
	margin: 1rem auto 0 1rem;
`;

interface IDashboardComponentProps {
	$white?: boolean;
	$link?: boolean;
}
const DashboardSubheader = styled.h3<IDashboardComponentProps>`
	color: ${(props) => (props.$white ? "var(--white)" : "inherit")};
	margin: 0.5rem 0;
	cursor: ${(props) => (props.$link ? "cursor" : "default")};
`;

const DashboardText = styled.p<IDashboardComponentProps>`
	color: ${(props) => (props.$white ? "var(--white)" : "inherit")};
	margin: 0.5rem 0;
`;

const DashboardContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const DashboardSearchBar = styled.input`
	width: 100%;
`;

export {
	DashboardHeaderContainer,
	DashboardHeader,
	DashboardSubheader,
	DashboardText,
	DashboardContentContainer,
	DashboardSearchBar,
};
