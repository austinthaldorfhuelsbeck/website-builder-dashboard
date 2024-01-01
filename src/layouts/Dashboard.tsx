import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Grid } from "../components/grids/Grid";
import { useHide } from "../components/hooks/useHide";
import { DashboardTitle } from "../components/common/DashboardTitle";
import { listUpcomingEvents } from "../services/cl-api/events.service";
import { DashboardSubheader } from "../styles/layouts/dashboard-layout.style";
import { PropsWithChildren, useEffect, useState } from "react";
import { readFeaturedPost } from "../services/cl-api/posts.service";
import { GridItem } from "../components/grids/GridItem";
import { IPost } from "../interfaces/objects.interface";
import { IApiResponse } from "../interfaces/utils.interface";

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
	{
		label: "Featured Post",
		children: <FeaturedPost />,
	},
];

// Components
function FeaturedPost() {
	// State
	const [post, setPost] = useState<IPost | undefined>();

	// Effects
	useEffect(
		function () {
			async function loadFeatured() {
				const response: IApiResponse = await readFeaturedPost();
				if (response.data) setPost(response.data);
			}
			if (!post) loadFeatured();
		},
		[post],
	);

	return <>{post && <GridItem resource={post} />}</>;
}
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
			</DashboardSubheader>
			{isDisplayed && children}
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
