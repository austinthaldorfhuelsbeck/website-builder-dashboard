import { ComponentType, PropsWithChildren } from "react"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { withAuthenticationRequired } from "@auth0/auth0-react"

import { Loader, PageContent } from "../../styles/layouts/page-layout.style"

interface ComponentProps {
	component: ComponentType
}

// Components
function AuthenticationGuard({ component }: PropsWithChildren<ComponentProps>) {
	// only return if authenticated
	const Component = withAuthenticationRequired(component, {
		onRedirecting: () => (
			<PageContent>
				<Loader icon={faSpinner} />
			</PageContent>
		),
	})

	return <Component />
}

// Exports
export { AuthenticationGuard }
