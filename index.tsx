// @ts-nocheck
// Feel free to remove if you'd like types!

import { block } from "./data";

export function App() {
  return (
    <pre>
      <p>An empty React app to get you started! Edit index.tsx</p>
      <p>◀ ▼ ▲ ▶</p>
      {JSON.stringify(block, null, 2)}
    </pre>
  );
}
