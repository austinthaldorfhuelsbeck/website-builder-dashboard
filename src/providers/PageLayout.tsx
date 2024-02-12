import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const PageLayout: FC = () => {
	return (
		<div className="flex flex-col w-full h-full">
			<NavBar />
			<div className="flex flex-row justify-start h-full">
				<SideBar />
				<div className="flex flex-col basis-auto shrink-0 m-4 w-4/5">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default PageLayout;
