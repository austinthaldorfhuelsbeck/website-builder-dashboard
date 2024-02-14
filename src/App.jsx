import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
	// Routes
	const content = useRoutes(routes);

	// Display loading while useRoutes resolves
	return (
		<div className="flex flex-col w-full h-full">
			{content || (
				<FontAwesomeIcon
					icon={faSpinner}
					className="text-9xl m-auto animate-spin"
					style={{
						animationDuration: "2.5s",
						animationIterationCount: "infinite",
					}}
				/>
			)}
		</div>
	);
};

export default App;
