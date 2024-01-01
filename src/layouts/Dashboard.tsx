import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Grid } from "../components/grids/Grid";
import { useHide } from "../components/hooks/useHide";
import { DashboardTitle } from "../components/common/DashboardTitle";
import { listUpcomingEvents } from "../services/cl-api/events.service";
import { DashboardSubheader } from "../styles/layouts/dashboard-layout.style";
import { PropsWithChildren } from "react";
import { listPosts } from "../services/cl-api/posts.service";

// Data
interface ComponentProps {
	label: string;
	children: JSX.Element;
}

// Config
const componentProps: ComponentProps[] = [
	{
		label: "Upcoming Events",
		children: <Grid loader={listUpcomingEvents} />,
	},
];

// Components
function DashboardComponent({
	label,
	children,
}: PropsWithChildren<ComponentProps>) {
	// Hooks
	const { isDisplayed, onClick } = useHide();

	return (
		<>
			<DashboardSubheader onClick={onClick}>
				{`${label} `}
				<FontAwesomeIcon icon={isDisplayed ? faMinus : faPlus} />
				{isDisplayed && children}
			</DashboardSubheader>
		</>
	);
}
function Dashboard() {
	const { user } = useAuth0();

	return (
		<>
			<DashboardTitle>
				{user?.name ? `${user.name}'s Dashboard` : "Dashboard"}
			</DashboardTitle>
			{componentProps.map((props) => (
				<DashboardComponent {...props} />
			))}
		</>
	);
}

// Exports
export { Dashboard };
