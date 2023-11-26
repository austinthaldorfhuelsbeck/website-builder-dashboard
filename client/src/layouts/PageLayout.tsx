import { Outlet } from "react-router-dom"

import { PageContainer, PageContent } from "../styles/layouts/page-layout.style"

function PageNavBar() {
	return <>Page NavBar!</>
}
function PageFooter() {
	return <>Page Footer!</>
}

function PageLayout() {
	return (
		<PageContainer>
			<PageNavBar />
			<PageContent>
				<Outlet />
			</PageContent>
			<PageFooter />
		</PageContainer>
	)
}

export { PageLayout }
