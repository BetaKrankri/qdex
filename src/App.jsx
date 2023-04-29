import { useEffect, useState } from "react";
import {
  fetchPokemonEntry,
  initialState as initialEntry,
} from "../utils/utilsAPI";
import "./App.css";
import EntryCard from "./components/common/entrycard/EntryCard";
import { SpecieSection, AbilitiesSection } from "./components/sections/sections";

function App() {
  const [currentId, setCurrentId] = useState(33);
  const [entry, setEntry] = useState(initialEntry);

  useEffect(() => {
    const handleChangeId = async () => {
      const newEntry = await fetchPokemonEntry(currentId);
      setEntry(newEntry);
    };
    handleChangeId();
  }, [currentId]);

  useEffect(() => {
    console.log("Entry", entry);
    const tID = setTimeout(() => {
      setCurrentId((prev) => prev + 1);
    }, 100000);
    return () => {
      clearTimeout(tID);
    };
  }, [entry]);

  return (
    <>
      <div className="Header">
        <EntryCard entry={entry} />
      </div>
      <div className="Body">
        <SpecieSection entry={entry}/>
        <AbilitiesSection entry={entry}/>
      </div>
      <div className="BottomNavbar"></div>
    </>
  );
}

export default App;
