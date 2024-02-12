import { Navigate, RouteObject } from "react-router-dom";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { initialCategory, initialTopic } from "./data/app-consts.data";
import { IFormHookProps } from "./interfaces/forms.interface";
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
import CategoryForm from "./views/CategoryForm";
import EventForm from "./views/EventForm";
import Grid from "./views/Grid";
import NotFoundPage from "./views/NotFoundPage";
import PostForm from "./views/PostForm";
import { TopicForm } from "./views/TopicForm";

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
		element: <PageLayout />,
		children: [
			{ index: true, element: <Navigate to="/posts" /> },
			{
				path: "posts",
				children: [
					{ index: true, element: <Grid loader={listPosts} /> },
					{ path: "new", element: <PostForm /> },
					{ path: ":post_id", element: <PostForm /> },
				],
			},
			{
				path: "events",
				children: [
					{ index: true, element: <Grid loader={listEvents} /> },
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
					{ index: true, element: <Grid loader={listPostTopics} /> },
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
		element: <FontAwesomeIcon icon={faSpinner} />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];

export default routes;