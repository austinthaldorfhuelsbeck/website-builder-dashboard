import { RouteObject } from "react-router-dom";

import { initialCategory, initialTopic } from "./data/app-consts.data";
import { IFormHookProps } from "./interfaces";
import AuthenticationGuard from "./providers/AuthenticationGuard";
import PageLayout from "./providers/PageLayout";
import {
	deleteEventCategory,
	listEventCategories,
	readEventCategory,
	updateEventCategory,
} from "./services/event-categories.service";
import { listEvents } from "./services/events.service";
import {
	deletePostCategory,
	listPostCategories,
	readPostCategory,
	updatePostCategory,
} from "./services/post-categories.service";
import {
	deletePostTopic,
	listPostTopics,
	readPostTopic,
	updatePostTopic,
} from "./services/post-topics.service";
import { listPosts } from "./services/posts.service";
import CategoryForm from "./views/CategoryPage";
import EventForm from "./views/EventPage";
import Grid from "./views/GridPage";
import LoginPage from "./views/LoginPage";
import NotFoundPage from "./views/NotFoundPage";
import PostForm from "./views/PostPage";
import TopicForm from "./views/TopicPage";

// Config
const postCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	readFunction: readPostCategory,
	updateFunction: updatePostCategory,
	deleteFunction: deletePostCategory,
};
const postTopicFormConfig: IFormHookProps = {
	initialData: initialTopic,
	readFunction: readPostTopic,
	updateFunction: updatePostTopic,
	deleteFunction: deletePostTopic,
};
const eventCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	readFunction: readEventCategory,
	updateFunction: updateEventCategory,
	deleteFunction: deleteEventCategory,
};

const routes: RouteObject[] = [
	{
		path: "/",
		element: <AuthenticationGuard />,
		children: [
			{
				path: "/",
				element: <PageLayout />,
				children: [
					{
						path: "posts",
						children: [
							{
								index: true,
								element: <Grid loader={listPosts} />,
							},
							{ path: "new", element: <PostForm /> },
							{ path: ":post_id", element: <PostForm /> },
						],
					},
					{
						path: "events",
						children: [
							{
								index: true,
								element: <Grid loader={listEvents} />,
							},
							{ path: "new", element: <EventForm /> },
							{ path: ":event_id", element: <EventForm /> },
						],
					},
					{
						path: "post-categories",
						children: [
							{
								index: true,
								element: <Grid loader={listPostCategories} />,
							},
							{
								path: "new",
								element: (
									<CategoryForm {...postCategoryFormConfig} />
								),
							},
							{
								path: ":category_id",
								element: (
									<CategoryForm {...postCategoryFormConfig} />
								),
							},
						],
					},
					{
						path: "post-topics",
						children: [
							{
								index: true,
								element: <Grid loader={listPostTopics} />,
							},
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
								element: <Grid loader={listEventCategories} />,
							},
							{
								path: "new",
								element: (
									<CategoryForm
										{...eventCategoryFormConfig}
									/>
								),
							},
							{
								path: ":category_id",
								element: (
									<CategoryForm
										{...eventCategoryFormConfig}
									/>
								),
							},
						],
					},
				],
			},
		],
	},
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

export default routes;
