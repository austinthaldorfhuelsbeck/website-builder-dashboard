import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useGrid = ({ loader }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [resources, setResources] = useState([]);

	const onCreate = (e) => {
		e.preventDefault();
		navigate(`${location.pathname}/new`);
	};

	useEffect(() => {
		const loadResources = async () => {
			try {
				const response = await loader();
				if (response.data) setResources(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		loadResources();
	}, [loader]);

	return { resources, onCreate };
};

export default useGrid;
