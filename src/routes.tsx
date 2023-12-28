import { RouteObject } from "react-router-dom"
import { AdminLayout } from "./layouts/AdminLayout"
import { AuthenticationGuard } from "./components/common/AuthenticationGuard"
import { Debug } from "./components/common/Debug"
import { PostsGrid } from "./components/Grids/PostsGrid"
import { EventsGrid } from "./components/Grids/EventsGrid"

function DashboardLayout() {
	return <>Dashboard!</>
}
function PostForm() {
	return <>Post Form!</>
}
function EventForm() {
	return <>Event Form!</>
}
function PostCategoriesGrid() {
	return <>PostCategoriesGrid</>
}
function PostCategoriesForm() {
	return <>PostCategoriesForm</>
}
function PostTopicsGrid() {
	return <>PostTopicsGrid</>
}
function PostTopicsForm() {
	return <>PostTopicsForm</>
}
function EventCategoriesGrid() {
	return <>EventCategoriesGrid</>
}
function EventCategoriesForm() {
	return <>EventCategoriesForm</>
}
function CallbackPage() {
	return <>Callback!</>
}
function NotFound() {
	return <>Not Found!</>
}

const routes: RouteObject[] = [
	{
		path: "/",
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
		path: "debug",
		element: <Debug />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]

export { routes }
