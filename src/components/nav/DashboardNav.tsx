import { ChangeEvent, useState } from "react";

import { useSearchParams } from "react-router-dom";
import {
	DashboardNavContainer,
	DashboardSearchBar,
} from "../../styles/layouts/dashboard-layout.style";

// Data
interface IQuery {
	query: string | undefined;
}

function DashboardNav() {
	// State
	const [searchParams, setSearchParams] = useSearchParams();
	const [formData, setFormData] = useState<IQuery>({ query: undefined });

	// Handlers
	function onChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setSearchParams({ query: e.target.value });
		setFormData({ ...formData, query: e.target.value });
	}

	return (
		<DashboardNavContainer>
			<DashboardSearchBar
				type="search"
				placeholder="Search"
				aria-label="Search"
				onChange={onChange}
				value={formData.query}
			/>
		</DashboardNavContainer>
	);
}

export { DashboardNav };
