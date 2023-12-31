import { RouteObject, useRoutes } from "react-router-dom";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Layout } from "./layouts/Layout";
import { Grid } from "./components/grids/Grid";
import { PostForm } from "./components/forms/PostForm";
import { EventForm } from "./components/forms/EventForm";
import { listPosts } from "./services/cl-api/posts.service";
import { listEvents } from "./services/cl-api/events.service";
import { listPostTopics } from "./services/cl-api/post-topics.service";
import { Loader, PageContainer } from "./styles/layouts/page-layout.style";
import { AuthenticationGuard } from "./components/common/AuthenticationGuard";
import { listPostCategories } from "./services/cl-api/post-categories.service";
import { listEventCategories } from "./services/cl-api/event-categories.service";
import { CategoryForm } from "./components/forms/CategoryForm";
import {
	eventCategoryFormConfig,
	postCategoryFormConfig,
	postTopicFormConfig,
} from "./components/forms/config/hook-config";
import { TopicForm } from "./components/forms/TopicForm";
import {
	EventCategoriesGrid,
	EventsGrid,
	PostCategoriesGrid,
	PostTopicsGrid,
	PostsGrid,
} from "./components/grids/Grids";

function Dashboard() {
	return <>Dashboard!</>;
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
					{
						index: true,
						element: <PostCategoriesGrid />,
					},
					{
						path: "new",
						element: <CategoryForm {...postCategoryFormConfig} />,
					},
					{
						path: ":category_id",
						element: <CategoryForm {...postCategoryFormConfig} />,
					},
				],
			},
			{
				path: "post-topics",
				children: [
					{ index: true, element: <PostTopicsGrid /> },
					{
						path: "new",
						element: <TopicForm {...postTopicFormConfig} />,
					},
					{
						path: ":topic_id",
						element: <TopicForm {...postTopicFormConfig} />,
					},
				],
			},
			{
				path: "event-categories",
				children: [
					{
						index: true,
						element: <EventCategoriesGrid />,
					},
					{
						path: "new",
						element: <CategoryForm {...eventCategoryFormConfig} />,
					},
					{
						path: ":category_id",
						element: <CategoryForm {...eventCategoryFormConfig} />,
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
