import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { dashboardNavLinks } from "../data/app-config.data";
import { ILink, ILinkGroup } from "../interfaces/utils.interface";

// Interfaces for props
interface LinkProps {
	link: ILink;
}

interface SectionProps {
	linkGroup: ILinkGroup;
}

const SidebarLink = ({ link }: PropsWithChildren<LinkProps>) => (
	<Link
		to={link.target}
		className="bg-gray-800 text-white w-11/12 my-2 py-2 px-4 rounded-r-md hover:bg-gray-300 hover:text-gray-800"
	>
		{link.label}
	</Link>
);

const SidebarSection = ({ linkGroup }: PropsWithChildren<SectionProps>) => {
	const { label, links } = linkGroup;
	return (
		<div className="flex flex-col">
			<h4 className="m-2 text-md cursor-default">{label}</h4>
			{links.map((link: ILink) => (
				<SidebarLink key={link.id} link={link} />
			))}
		</div>
	);
};

const SideBar = () => (
	<nav className="top-0 min-w-[230px] bg-gray-200 py-2 border-gray-600 shadow">
		{dashboardNavLinks.map((linkGroup: ILinkGroup) => (
			<SidebarSection key={linkGroup.id} linkGroup={linkGroup} />
		))}
	</nav>
);

export default SideBar;
