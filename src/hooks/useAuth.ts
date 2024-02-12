import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

type IUserAuth = {
	email: string;
	password: string;
};

const useAuth = () => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<IUserAuth>({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => {
			const { name, value } = e.target;
			return { ...prev, [name]: value };
		});
	};

	const onLogin = (e: FormEvent) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, formData.email, formData.password)
			.then(() => navigate("/events"))
			.catch((error) => setError(error.message));
	};

	return { onChange, onLogin, error };
};

export default useAuth;
