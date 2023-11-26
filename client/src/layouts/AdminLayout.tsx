import { Outlet } from "react-router-dom"

import { PageContainer, PageContent } from "../styles/layouts/page-layout.style"

function DashboardHeader() {
	return <>Dashboard Header!</>
}
function DashboardSidebar() {
	return <>Dashboard Sidebar!</>
}

function AdminLayout() {
	return (
		<PageContainer>
			<DashboardHeader />
			<>
				<DashboardSidebar />
				<PageContent>
					<Outlet />
				</PageContent>
			</>
		</PageContainer>
	)
}

export { AdminLayout }
