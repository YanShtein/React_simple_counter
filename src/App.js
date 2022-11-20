import { useState } from "react";



function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h2>Simple counter</h2>
      <p>{number}</p>
      <div>
        <button onClick={() => setNumber(number + 1)}>Increment</button>
        <button onClick={() => setNumber(0)}>Reset</button>
        <button onClick={() => setNumber(number - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
