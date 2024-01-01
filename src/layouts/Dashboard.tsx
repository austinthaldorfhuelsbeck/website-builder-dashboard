import { useAuth0 } from "@auth0/auth0-react";
import { DashboardTitle } from "../components/common/DashboardTitle";

// Components
function Dashboard() {
	const { user } = useAuth0();

	return (
		<DashboardTitle>
			{user?.name ? `${user.name}'s Dashboard` : ""}
		</DashboardTitle>
	);
}

// Exports
export { Dashboard };
