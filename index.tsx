// @ts-nocheck
// Feel free to remove if you'd like types!

import { block } from "./data";

export function App() {
  return (
    <main>
      <p>An empty React app to get you started! Edit index.tsx</p>
      <pre>
        <p>◀ ▼ ▲ ▶</p>
        {JSON.stringify(block, null, 2)}
      </pre>
    </main>
  );
}
