import { Link } from "react-router-dom";

const viewGroup = {
	id: 0,
	label: "View",
	links: [
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
};
const createGroup = {
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
};
const manageGroup = {
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
};

const dashboardNavLinks = [viewGroup, createGroup, manageGroup];

const SidebarLink = ({ link }) => (
	<Link
		to={link.target}
		className="bg-gray-800 text-white w-11/12 my-2 py-2 px-4 rounded-r-md hover:bg-gray-300 hover:text-gray-800"
	>
		{link.label}
	</Link>
);

const SidebarSection = ({ linkGroup }) => {
	const { label, links } = linkGroup;
	return (
		<div className="flex flex-col">
			<h4 className="m-2 text-md cursor-default">{label}</h4>
			{links.map((link) => (
				<SidebarLink key={link.id} link={link} />
			))}
		</div>
	);
};

const SideBar = () => (
	<nav className="top-0 min-w-[230px] bg-gray-200 py-2 border-gray-600 shadow">
		{dashboardNavLinks.map((linkGroup) => (
			<SidebarSection key={linkGroup.id} linkGroup={linkGroup} />
		))}
	</nav>
);

export default SideBar;
