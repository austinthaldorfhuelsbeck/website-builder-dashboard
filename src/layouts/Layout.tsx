import { Outlet } from "react-router-dom"

import { DashboardNav } from "../components/nav/DashboardNav";
import { PageContainer, PageContent } from "../styles/layouts/page-layout.style"
import { DashboardContentContainer } from "../styles/layouts/dashboard-layout.style";
import { DashboardSidebar } from "../components/sidebars/DashboardSidebar";

function Layout() {
	return (
		<PageContainer>
			<DashboardNav />
			<DashboardContentContainer>
				<DashboardSidebar />
				<PageContent>
					<Outlet />
				</PageContent>
			</DashboardContentContainer>
		</PageContainer>
	);
}

export { Layout }
