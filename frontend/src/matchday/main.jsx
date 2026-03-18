import React from "react";
import { createRoot } from "react-dom/client";

import { MatchdayIsland } from "./matchday-island.jsx";

const rootElement = document.getElementById("matchday-react-root");
const payloadElement = document.getElementById("matchday-island-data");

if (rootElement && payloadElement?.textContent) {
    const payload = JSON.parse(payloadElement.textContent);
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <MatchdayIsland data={payload} />
        </React.StrictMode>
    );
}
