import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const PageLayout = () => (
	<div className="flex flex-col w-full h-full">
		<NavBar />
		<div className="flex-initial flex flex-row justify-start h-full">
			<SideBar />
			<div className="flex-auto flex flex-col basis-auto shrink-0 m-4 mr-12">
				<Outlet />
			</div>
		</div>
	</div>
);

export default PageLayout;
