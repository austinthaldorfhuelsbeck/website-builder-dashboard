import { useRoutes } from "react-router-dom"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import { routes } from "./routes"
import { Loader, PageContainer } from "./styles/layouts/page-layout.style"

function App() {
	// Routes
	const content = useRoutes(routes)
	// display loading while useRoutes resolves
	return content ? (
		content
	) : (
		<PageContainer>
			<Loader icon={faSpinner} />
		</PageContainer>
	)
}

export { App }
