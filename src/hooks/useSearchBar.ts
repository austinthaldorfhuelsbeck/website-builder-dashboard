import { ChangeEvent, SyntheticEvent, useState } from "react";

import { useSearchParams } from "react-router-dom";

// Data
type IQuery = {
	query: string | undefined;
};

// Hooks
const useSearchBar = () => {
	// The search bar will simply update react-router searchParams
	// filtering is handled by Grid component
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();
	const [formData, setFormData] = useState<IQuery>({ query: undefined });

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setSearchParams({ query: e.target.value });
		setFormData({ ...formData, query: e.target.value });
	};

	const onClear = (e: SyntheticEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setSearchParams(undefined);
		setFormData({ query: "" });
	};

	return { formData, onChange, onClear };
};

export default useSearchBar;
