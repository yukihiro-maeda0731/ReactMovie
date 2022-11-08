import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // componentの初期化時とcounterのstate変更時に走る
  useEffect(() => {
    alert("カウンターを" + counter + "に変えました。");
    // stateのマニュアルでの変更は不可。ここではsetCounterで変更する必要あり。
    // counter = 100;
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
        -
      </button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
