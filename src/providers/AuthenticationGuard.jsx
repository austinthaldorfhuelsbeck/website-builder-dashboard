import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";

const AuthenticationGuard = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (user) => {
			if (user) {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
				navigate("/login");
			}
		});
	}, [navigate]);

	return isAuthenticated ? <Outlet /> : <></>;
};

export default AuthenticationGuard;
