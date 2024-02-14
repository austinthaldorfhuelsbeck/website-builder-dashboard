import AuthenticationGuard from "./providers/AuthenticationGuard";
import PageLayout from "./providers/PageLayout";
import { listEventCategories } from "./services/eventCategories.service";
import { listEvents } from "./services/events.service";
import { listPostCategories } from "./services/postCategories.service";
import { listPostTopics } from "./services/postTopics.service";
import { listPosts } from "./services/posts.service";
import EventCategoryPage from "./views/EventCategoryPage";
import EventPage from "./views/EventPage";
import Grid from "./views/GridPage";
import LoginPage from "./views/LoginPage";
import NotFoundPage from "./views/NotFoundPage";
import PostCategoryPage from "./views/PostCategoryPage";
import PostPage from "./views/PostPage";
import PostTopicPage from "./views/PostTopicPage";

const routes = [
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
								element: <PostPage />,
							},
							{
								path: ":post_id",
								element: <PostPage />,
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
								element: <EventPage />,
							},
							{
								path: ":event_id",
								element: <EventPage />,
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
								element: <PostCategoryPage />,
							},
							{
								path: ":category_id",
								element: <PostCategoryPage />,
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
								element: <PostTopicPage />,
							},
							{
								path: ":topic_id",
								element: <PostTopicPage />,
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
								element: <EventCategoryPage />,
							},
							{
								path: ":category_id",
								element: <EventCategoryPage />,
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
