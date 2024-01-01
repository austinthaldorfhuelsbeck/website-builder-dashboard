import { Outlet } from "react-router-dom"

import { DashboardHeader } from "../components/headers/DashboardHeader"
import { PageContainer, PageContent } from "../styles/layouts/page-layout.style"
import { DashboardContentContainer } from "../styles/layouts/dashboard-layout.style";
import { DashboardSidebar } from "../components/sidebars/DashboardSidebar";

function Layout() {
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

export { Layout }
