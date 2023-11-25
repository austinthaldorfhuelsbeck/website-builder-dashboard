import { RouteObject } from "react-router-dom"

const routes: RouteObject[] = [
	{
		path: "/",
		element: <PageLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> },
			{ path: "redeeming-heartache", element: <RedeemingHeartache /> },
			{
				path: "posts",
				children: [
					{ index: true, element: <PostsLayout /> },
					{ path: ":post_id", element: <PostsLayout /> },
					{
						path: "category",
						children: [
							{ path: ":category_id", element: <PostsLayout /> },
						],
					},
					{
						path: "topic",
						children: [
							{ path: ":topic_id", element: <PostsLayout /> },
						],
					},
				],
			},
			{
				path: "/events",
				children: [
					{ index: true, element: <EventsLayout /> },
					{ path: "/:event_id", element: <EventsLayout /> },
					{
						path: "/category",
						children: [
							{ path: ":category_id", element: <EventsLayout /> },
						],
					},
				],
			},
		],
	},
	{
		path: "/admin",
		element: <AuthenticationGuard component={AdminLayout} />,
		children: [
			{ index: true, element: <DashboardLayout /> },
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
					{ path: ":category_id", element: <PostCategoriesForm /> },
				],
			},
			{
				path: "post-topics",
				children: [
					{ index: true, element: <PostTopicsGrid /> },
					{ path: "new", element: <PostTopicsForm /> },
					{ path: ":topic_id", element: <PostTopicsForm /> },
				],
			},
			{
				path: "event-categories",
				children: [
					{ index: true, element: <EventCategoriesGrid /> },
					{ path: "new", element: <EventCategoriesForm /> },
					{ path: ":category_id", element: <EventCategoriesForm /> },
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
]

export { routes }
