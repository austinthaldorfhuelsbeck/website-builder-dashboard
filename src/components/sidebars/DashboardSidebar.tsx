import { PropsWithChildren } from "react"

import { dashboardNavLinks } from "../../data/app-config.data"
import { ILink, ILinkGroup } from "../../interfaces/utils.interface"
import {
	SectionContainer,
	SectionHeader,
	SectionLink,
	SidebarContainer,
} from "../../styles/components/dashboard-sidebar.style"

// Data
interface SectionProps {
	linkGroup: ILinkGroup
}
interface LinkProps {
	link: ILink
}

// Components
function SidebarLink({ link }: PropsWithChildren<LinkProps>) {
	return <SectionLink to={link.target}>{link.label}</SectionLink>
}
function SidebarSection({ linkGroup }: PropsWithChildren<SectionProps>) {
	const { label, links } = linkGroup

	return (
		<SectionContainer>
			<SectionHeader>{label}</SectionHeader>
			{links.map(function (link: ILink) {
				return <SidebarLink key={link.id} link={link} />
			})}
		</SectionContainer>
	)
}
function DashboardSidebar() {
	return (
		<SidebarContainer>
			{dashboardNavLinks.map(function (linkGroup: ILinkGroup) {
				return (
					<SidebarSection key={linkGroup.id} linkGroup={linkGroup} />
				)
			})}
		</SidebarContainer>
	)
}

// Return
export { DashboardSidebar }
