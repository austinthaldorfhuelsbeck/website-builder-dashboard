import { RouteObject } from "react-router-dom";

import {
	initialCategory,
	initialEvent,
	initialPost,
	initialTopic,
} from "./data/app-consts.data";
import { IFormHookProps } from "./interfaces";
import AuthenticationGuard from "./providers/AuthenticationGuard";
import PageLayout from "./providers/PageLayout";
import {
	createEventCategory,
	deleteEventCategory,
	listEventCategories,
	readEventCategory,
	updateEventCategory,
} from "./services/event-categories.service";
import {
	createEvent,
	deleteEvent,
	listEvents,
	readEvent,
	updateEvent,
} from "./services/events.service";
import {
	createPostCategory,
	deletePostCategory,
	listPostCategories,
	readPostCategory,
	updatePostCategory,
} from "./services/post-categories.service";
import {
	createPostTopic,
	deletePostTopic,
	listPostTopics,
	readPostTopic,
	updatePostTopic,
} from "./services/post-topics.service";
import {
	createPost,
	deletePost,
	listPosts,
	readPost,
	updatePost,
} from "./services/posts.service";
import CategoryPage from "./views/CategoryPage";
import EventPage from "./views/EventPage";
import Grid from "./views/GridPage";
import LoginPage from "./views/LoginPage";
import NotFoundPage from "./views/NotFoundPage";
import PostForm from "./views/PostPage";
import TopicPage from "./views/TopicPage";

// Config
const postFormConfig: IFormHookProps = {
	initialData: initialPost,
	createFunction: createPost,
	readFunction: readPost,
	updateFunction: updatePost,
	deleteFunction: deletePost,
};
const eventFormConfig: IFormHookProps = {
	initialData: initialEvent,
	createFunction: createEvent,
	readFunction: readEvent,
	updateFunction: updateEvent,
	deleteFunction: deleteEvent,
};
const postCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	createFunction: createPostCategory,
	readFunction: readPostCategory,
	updateFunction: updatePostCategory,
	deleteFunction: deletePostCategory,
};
const postTopicFormConfig: IFormHookProps = {
	initialData: initialTopic,
	createFunction: createPostTopic,
	readFunction: readPostTopic,
	updateFunction: updatePostTopic,
	deleteFunction: deletePostTopic,
};
const eventCategoryFormConfig: IFormHookProps = {
	initialData: initialCategory,
	createFunction: createEventCategory,
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
							{
								path: "new",
								element: <PostForm {...postFormConfig} />,
							},
							{
								path: ":post_id",
								element: <PostForm {...postFormConfig} />,
							},
						],
					},
					{
						path: "events",
						children: [
							{
								index: true,
								element: <Grid loader={listEvents} />,
							},
							{
								path: "new",
								element: <EventPage {...eventFormConfig} />,
							},
							{
								path: ":event_id",
								element: <EventPage {...eventFormConfig} />,
							},
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
									<CategoryPage {...postCategoryFormConfig} />
								),
							},
							{
								path: ":category_id",
								element: (
									<CategoryPage {...postCategoryFormConfig} />
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
								element: <TopicPage {...postTopicFormConfig} />,
							},
							{
								path: ":topic_id",
								element: <TopicPage {...postTopicFormConfig} />,
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
									<CategoryPage
										{...eventCategoryFormConfig}
									/>
								),
							},
							{
								path: ":category_id",
								element: (
									<CategoryPage
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
