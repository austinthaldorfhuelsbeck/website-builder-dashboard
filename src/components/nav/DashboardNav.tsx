import { ChangeEvent, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContextMenu } from "../menus/ContextMenu";
import { CircleImg } from "../../styles/components/util.style";
import { ContextListItem } from "../../styles/components/context-menu";
import {
	DashboardNavContainer,
	DashboardSearchBar,
} from "../../styles/layouts/dashboard-layout.style";

// Data
interface IQuery {
	query: string | undefined;
}

// Components
function NavButton() {
	// Hooks
	const { logout, user } = useAuth0();

	// Handlers
	function onLogout() {
		logout({
			logoutParams: {
				// Go home on logout
				returnTo: window.location.origin,
			},
		});
	}

	return (
		<ContextMenu
			button={<CircleImg src={user?.picture} />}
			content={
				<ContextListItem onClick={onLogout}>
					<FontAwesomeIcon icon={faSignOut} />
					<label>Log Out</label>
				</ContextListItem>
			}
		/>
	);
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
			<NavButton />
		</DashboardNavContainer>
	);
}

export { DashboardNav };
