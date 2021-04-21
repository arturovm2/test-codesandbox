import "./styles.css";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox test</h1>
      <h2>Start editing to see some magic happen!</h2>
      <span>{contador}</span>
      <button onClick={() => setContador(contador + 1)}>contador</button>
    </div>
  );
}
