import { useState, MouseEvent } from "react";

// Components
function useHide() {
	// State
	// show and hide
	const [isDisplayed, setIsDisplayed] = useState<boolean>(true);

	// Handlers
	function toggle(current: boolean): void {
		setIsDisplayed(!current);
	}
	function onClick(e: MouseEvent<any>) {
		toggle(isDisplayed);
	}

	return { isDisplayed, onClick };
}

// Exports
export { useHide };
