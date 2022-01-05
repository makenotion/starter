import { useEffect, useState } from "react";
import { App } from "..";

export default function HomePage() {
    // Only render on the client
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => setIsBrowser(true), []);
    if (!isBrowser) {
        return null;
    }

    return <App />;
}
