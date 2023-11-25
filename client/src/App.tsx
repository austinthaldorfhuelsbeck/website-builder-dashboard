import { useRoutes } from "react-router-dom"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import { routes } from "./routes"
import { ContextProvider } from "./context/context.interface"
import { Loader, PageContainer } from "./styles/layouts/page-layout.style"

function App() {
	// Routes
	const content = useRoutes(routes)
	// display loading while useRoutes resolves
	return content ? (
		<ContextProvider>{content}</ContextProvider>
	) : (
		<PageContainer>
			<Loader icon={faSpinner} />
		</PageContainer>
	)
}

export { App }
