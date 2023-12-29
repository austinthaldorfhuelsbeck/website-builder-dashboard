import { ILinkGroup } from "../interfaces/utils.interface"

const viewGroup: ILinkGroup = {
	id: 0,
	label: "View",
	links: [
		{
			id: 0,
			label: "Dashboard",
			target: "/",
		},
		{
			id: 1,
			label: "Posts",
			target: "/posts",
		},
		{
			id: 2,
			label: "Events",
			target: "/events",
		},
	],
}
const createGroup: ILinkGroup = {
	id: 1,
	label: "Create",
	links: [
		{
			id: 0,
			label: "New Post",
			target: "/posts/new",
		},
		{
			id: 1,
			label: "New Event",
			target: "/events/new",
		},
	],
}
const manageGroup: ILinkGroup = {
	id: 2,
	label: "Manage",
	links: [
		{
			id: 0,
			label: "Post Categories",
			target: "/post-categories",
		},
		{
			id: 1,
			label: "Post Topics",
			target: "/post-topics",
		},
		{
			id: 2,
			label: "Event Categories",
			target: "/event-categories",
		},
	],
}

const dashboardNavLinks: ILinkGroup[] = [viewGroup, createGroup, manageGroup]

export { dashboardNavLinks }
