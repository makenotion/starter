import { block } from "./data";

export function App() {
  return (
    <pre>
      <code>{JSON.stringify(block, null, 2)}</code>
    </pre>
  );
}
