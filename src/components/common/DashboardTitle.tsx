import { PropsWithChildren } from "react";
import { DashboardHeader } from "../../styles/layouts/dashboard-layout.style";

// Data
interface ComponentProps {
	children: string;
}
// Components
function DashboardTitle({ children }: PropsWithChildren<ComponentProps>) {
	return (
		<>
			<DashboardHeader>{children}</DashboardHeader>
			<hr />
		</>
	);
}

// Exports
export { DashboardTitle };
