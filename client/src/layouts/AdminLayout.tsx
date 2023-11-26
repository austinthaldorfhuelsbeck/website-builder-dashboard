import { Outlet } from "react-router-dom"

import { DashboardHeader } from "../components/headers/DashboardHeader"
import { PageContainer, PageContent } from "../styles/layouts/page-layout.style"
import { DashboardContentContainer } from "../styles/layouts/admin-layout.style"
import { DashboardSidebar } from "../components/sidebars/DashboardSidebar"

function AdminLayout() {
	return (
		<PageContainer>
			<DashboardHeader />
			<DashboardContentContainer>
				<DashboardSidebar />
				<PageContent>
					<Outlet />
				</PageContent>
			</DashboardContentContainer>
		</PageContainer>
	)
}

export { AdminLayout }
