import { useEffect, useState } from "react";
import "./App.css";

import { fetchPokeData } from "../utils/utilsAPI";

function App() {
  const [count, setCount] = useState(94);

  useEffect(() => {
    const printData = async () => {
      const data = await fetchPokeData(count);
      console.log(data);
    };
    printData();
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
