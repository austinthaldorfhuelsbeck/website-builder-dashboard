import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import { firebaseAuth } from "../firebase";

const Login = () => {
	const navigate = useNavigate();

	const [error, setError] = useState("");
	const [formData, setFormData] = useState({});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(
			firebaseAuth,
			formData.email,
			formData.password,
		)
			.then(() => navigate("/events"))
			.catch((error) => setError(error.message));
	};

	return (
		<div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
			<div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
				<div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
					<div className="my-3 text-4xl font-bold tracking-wider text-center">
						Admin Dashboard
					</div>
					<p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
						Sign in to manage your posts and events.
					</p>
				</div>
				<div className="p-5 bg-white md:flex-1">
					<h3 className="my-4 text-2xl font-semibold text-gray-700">
						Account Login
					</h3>
					<form
						onSubmit={onSubmit}
						className="flex flex-col space-y-5"
					>
						<InputGroup
							label="Email address"
							id="email"
							type="email"
							onChange={onChange}
							value={formData.email}
						/>
						<InputGroup
							label="Password"
							id="password"
							type="password"
							onChange={onChange}
							value={formData.password}
						/>
						<div>
							<button
								type="submit"
								className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
							>
								Log in
							</button>
						</div>
						{error && (
							<p className="text-red-300">
								Username or password is incorrect. Please try
								again.
							</p>
						)}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
