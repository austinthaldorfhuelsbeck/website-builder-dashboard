import useAuth from "../../hooks/useAuth";

const Login = () => {
	const { onChange, onLogin, error } = useAuth();

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
						onSubmit={onLogin}
						className="flex flex-col space-y-5"
					>
						<div className="flex flex-col space-y-1">
							<label
								htmlFor="email-address"
								className="text-sm font-semibold text-gray-500"
							>
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Email address"
								onChange={onChange}
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
							/>
						</div>
						<div className="flex flex-col space-y-1">
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="text-sm font-semibold text-gray-500"
								>
									Password
								</label>
							</div>
							<input
								id="password"
								name="password"
								type="password"
								required
								placeholder="Password"
								onChange={onChange}
								className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
							/>
						</div>
						{error && (
							<div className="mx-1 px-4 py-2 rounded-md bg-red-300">
								{error}
							</div>
						)}
						<div>
							<button
								type="submit"
								className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
							>
								Log in
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
