import { RouteObject, useRoutes } from "react-router-dom";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Layout } from "./layouts/Layout";
import { Grid } from "./components/grids/Grid";
import { Dashboard } from "./layouts/Dashboard";
import { PostForm } from "./components/forms/PostForm";
import { EventForm } from "./components/forms/EventForm";
import { TopicForm } from "./components/forms/TopicForm";
import { listPosts } from "./services/cl-api/posts.service";
import { listEvents } from "./services/cl-api/events.service";
import { CategoryForm } from "./components/forms/CategoryForm";
import { listPostTopics } from "./services/cl-api/post-topics.service";
import { Loader, PageContainer } from "./styles/layouts/page-layout.style";
import { listPostCategories } from "./services/cl-api/post-categories.service";
import { listEventCategories } from "./services/cl-api/event-categories.service";
import {
	eventCategoryFormConfig,
	postCategoryFormConfig,
	postTopicFormConfig,
} from "./components/forms/config/hook-config";
import { DashboardTitle } from "./components/common/DashboardTitle";

// Config
const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
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
		element: <Loader icon={faSpinner} />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

// Components
function NotFoundPage() {
	return <DashboardTitle>404 Not Found</DashboardTitle>;
}
function PostsGrid() {
	return <Grid loader={listPosts} />;
}
function EventsGrid() {
	return <Grid loader={listEvents} />;
}
function PostCategoriesGrid() {
	return <Grid loader={listPostCategories} />;
}
function PostTopicsGrid() {
	return <Grid loader={listPostTopics} />;
}
function EventCategoriesGrid() {
	return <Grid loader={listEventCategories} />;
}
function App() {
	// Routes
	const content = useRoutes(routes);
	// display loading while useRoutes resolves
	return (
		<PageContainer>{content || <Loader icon={faSpinner} />}</PageContainer>
	);
}

// Exports
export { App };
