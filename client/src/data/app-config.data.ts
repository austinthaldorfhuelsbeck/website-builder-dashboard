import { ILinkGroup } from "../interfaces/utils.interface"

const baseUrl: string = "/admin"

const viewGroup: ILinkGroup = {
	id: 0,
	label: "View",
	links: [
		{
			id: 0,
			label: "Dashboard",
			target: baseUrl,
		},
		{
			id: 1,
			label: "Posts",
			target: `${baseUrl}/posts`,
		},
		{
			id: 2,
			label: "Events",
			target: `${baseUrl}/events`,
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
			target: `${baseUrl}/posts/new`,
		},
		{
			id: 1,
			label: "New Event",
			target: `${baseUrl}/events/new`,
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
			target: `${baseUrl}/post-categories`,
		},
		{
			id: 1,
			label: "Post Topics",
			target: `${baseUrl}/post-topics`,
		},
		{
			id: 2,
			label: "Event Categories",
			target: `${baseUrl}/event-categories`,
		},
	],
}

const dashboardNavLinks: ILinkGroup[] = [viewGroup, createGroup, manageGroup]

export { dashboardNavLinks }
