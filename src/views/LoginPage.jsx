import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import { auth } from "../firebase";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const [error, setError] = useState("");

	const onSubmit = (data) => {
		signInWithEmailAndPassword(auth, data.email, data.password)
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
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-col space-y-5"
					>
						<InputGroup
							label="Email address"
							id="email-address"
							type="email"
							register={register("email", {
								required: "Email is required.",
								pattern: {
									value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
									message: "Email is not valid.",
								},
							})}
							error={errors.email}
						/>
						<InputGroup
							label="Password"
							id="password"
							type="password"
							register={register("password", {
								required: "Password is required.",
								minLength: {
									value: 6,
									message:
										"Password should be at least 6 characters.",
								},
							})}
							error={errors.password}
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
