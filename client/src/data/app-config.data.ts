import { ILinkGroup } from "../interfaces/utils.interface"

const viewGroup: ILinkGroup = {
	id: 0,
	label: "View",
	links: [
		{
			id: 0,
			label: "Dashboard",
			target: "/admin",
		},
		{
			id: 1,
			label: "All Posts",
			target: "/admin/posts",
		},
		{
			id: 2,
			label: "All Events",
			target: "/admin/events",
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
			target: "/admin/posts/new",
		},
		{
			id: 1,
			label: "New Event",
			target: "/admin/events/new",
		},
	],
}

const dashboardNavLinks: ILinkGroup[] = [viewGroup, createGroup]

export { dashboardNavLinks }
