import { StrictMode } from "react";

import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

// Get root element
const container = document.getElementById("root");
const root = createRoot(container);

// Render
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>,
);
