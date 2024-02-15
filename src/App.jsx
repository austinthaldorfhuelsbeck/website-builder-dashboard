import { useRoutes } from "react-router-dom";
import Spinner from "./components/Spinner";
import routes from "./routes";

const App = () => {
	// Routes
	const content = useRoutes(routes);

	// Display spinner while useRoutes resolves
	return (
		<div className="flex flex-col w-full h-full">
			{content || <Spinner />}
		</div>
	);
};

export default App;
