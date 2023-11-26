import { PropsWithChildren } from "react"
import { dashboardNavLinks } from "../../data/app-config.data"
import { ILink, ILinkGroup } from "../../interfaces/utils.interface"
import { Link } from "react-router-dom"

interface SectionProps {
	linkGroup: ILinkGroup
}
interface LinkProps {
	link: ILink
}

function SidebarLink({ link }: PropsWithChildren<LinkProps>) {
	return (
		<li>
			<Link to={link.target}>{link.label}</Link>
		</li>
	)
}
function SidebarSection({ linkGroup }: PropsWithChildren<SectionProps>) {
	const { label, links } = linkGroup

	return (
		<>
			<h6>{label}</h6>
			<ul>
				{links.map(function (link: ILink) {
					return <SidebarLink key={link.id} link={link} />
				})}
			</ul>
		</>
	)
}
function DashboardSidebar() {
	return (
		<nav>
			<ul>
				{dashboardNavLinks.map(function (linkGroup: ILinkGroup) {
					return (
						<SidebarSection
							key={linkGroup.id}
							linkGroup={linkGroup}
						/>
					)
				})}
			</ul>
		</nav>
	)
}

export { DashboardSidebar }
