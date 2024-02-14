import { useState } from "react";

import { useSearchParams } from "react-router-dom";

// Hooks
const useSearchBar = () => {
	// The search bar will simply update react-router searchParams
	// filtering is handled by Grid component
	// eslint-disable-next-line no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();
	const [formData, setFormData] = useState({ query: undefined });

	const onChange = (e) => {
		e.preventDefault();
		setSearchParams({ query: e.target.value });
		setFormData({ ...formData, query: e.target.value });
	};

	const onClear = (e) => {
		e.preventDefault();
		setSearchParams(undefined);
		setFormData({ query: "" });
	};

	return { formData, onChange, onClear };
};

export default useSearchBar;
