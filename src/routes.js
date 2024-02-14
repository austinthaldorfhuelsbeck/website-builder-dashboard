import {
	initialCategory,
	initialEvent,
	initialPost,
	initialTopic,
} from "./data/app-consts.data";
import AuthenticationGuard from "./providers/AuthenticationGuard";
import PageLayout from "./providers/PageLayout";
import {
	createEventCategory,
	deleteEventCategory,
	listEventCategories,
	readEventCategory,
	updateEventCategory,
} from "./services/eventCategories.service";
import {
	createEvent,
	deleteEvent,
	listEvents,
	readEvent,
	updateEvent,
} from "./services/events.service";
import {
	createPostTopic,
	deletePostTopic,
	listPostTopics,
	readPostTopic,
	updatePostTopic,
} from "./services/post-topics.service";
import {
	createPostCategory,
	deletePostCategory,
	listPostCategories,
	readPostCategory,
	updatePostCategory,
} from "./services/postCategories.service";
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
								path: "new" || ":post_id",
								element: (
									<PostForm
										initialData={initialPost}
										createFunction={createPost}
										readFunction={readPost}
										updateFunction={updatePost}
										deleteFunction={deletePost}
									/>
								),
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
								path: "new" || ":event_id",
								element: (
									<EventPage
										initialData={initialEvent}
										createFunction={createEvent}
										readFunction={readEvent}
										updateFunction={updateEvent}
										deleteFunction={deleteEvent}
									/>
								),
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
								path: "new" || ":category_id",
								element: (
									<CategoryPage
										initialData={initialCategory}
										createFunction={createPostCategory}
										readFunction={readPostCategory}
										updateFunction={updatePostCategory}
										deleteFunction={deletePostCategory}
									/>
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
								path: "new" || ":topic_id",
								element: (
									<TopicPage
										initialData={initialTopic}
										createFunction={createPostTopic}
										readFunction={readPostTopic}
										updateFunction={updatePostTopic}
										deleteFunction={deletePostTopic}
									/>
								),
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
								path: "new" || ":category_id",
								element: (
									<CategoryPage
										initialData={initialCategory}
										createFunction={createEventCategory}
										readFunction={readEventCategory}
										updateFunction={updateEventCategory}
										deleteFunction={deleteEventCategory}
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
