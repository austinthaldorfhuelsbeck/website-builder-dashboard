import { RouteObject, useRoutes } from "react-router-dom";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Loader, PageContainer } from "./styles/layouts/page-layout.style";
import { AuthenticationGuard } from "./components/common/AuthenticationGuard";
import { Layout } from "./layouts/Layout";
import {
	EventCategoriesGrid,
	EventsGrid,
	PostCategoriesGrid,
	PostTopicsGrid,
	PostsGrid,
} from "./components/Grids/Grids";
import { EventForm } from "./components/forms/EventForm";
import { PostForm } from "./components/forms/PostForm";

function Dashboard() {
	return <>Dashboard!</>;
}
function PostCategoriesForm() {
	return <>PostCategoriesForm</>;
}
function PostTopicsForm() {
	return <>PostTopicsForm</>;
}
function EventCategoriesForm() {
	return <>EventCategoriesForm</>;
}
function CallbackPage() {
	return <>Callback!</>;
}
function NotFound() {
	return <>Not Found!</>;
}

const routes: RouteObject[] = [
	{
		path: "/",
		element: <AuthenticationGuard component={Layout} />,
		children: [
			{ index: true, element: <Dashboard /> },
			{
				path: "posts",
				children: [
					{ index: true, element: <PostsGrid /> },
					{ path: "new", element: <PostForm /> },
					{ path: ":post_id", element: <PostForm /> },
				],
			},
			{
				path: "events",
				children: [
					{ index: true, element: <EventsGrid /> },
					{ path: "new", element: <EventForm /> },
					{ path: ":event_id", element: <EventForm /> },
				],
			},
			{
				path: "post-categories",
				children: [
					{ index: true, element: <PostCategoriesGrid /> },
					{ path: "new", element: <PostCategoriesForm /> },
					{
						path: ":post_category_id",
						element: <PostCategoriesForm />,
					},
				],
			},
			{
				path: "post-topics",
				children: [
					{ index: true, element: <PostTopicsGrid /> },
					{ path: "new", element: <PostTopicsForm /> },
					{ path: ":post_topic_id", element: <PostTopicsForm /> },
				],
			},
			{
				path: "event-categories",
				children: [
					{ index: true, element: <EventCategoriesGrid /> },
					{ path: "new", element: <EventCategoriesForm /> },
					{
						path: ":post_category_id",
						element: <EventCategoriesForm />,
					},
				],
			},
		],
	},
	{
		path: "callback",
		element: <CallbackPage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

function App() {
	// Routes
	const content = useRoutes(routes);
	// display loading while useRoutes resolves
	return (
		<PageContainer>{content || <Loader icon={faSpinner} />}</PageContainer>
	);
}

export { App };
