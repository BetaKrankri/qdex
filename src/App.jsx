import { useEffect, useState } from "react";
import {
  fetchPokemonEntry,
  initialState as initialEntry,
} from "../utils/utilsAPI";
import "./App.css";

import EntryCard from "./components/common/EntryCard/EntryCard";
import SpecieSection from "./components/sections/SpecieSection";
import AbilitiesSection from "./components/sections/AbilitySection";
import StatsSection from "./components/sections/StatsSection";

function App() {
  const [currentId, setCurrentId] = useState(Math.floor(Math.random() * 900));
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
      setCurrentId(Math.floor(Math.random() * 900));
    }, 1000000);
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
        <SpecieSection entry={entry} />
        <AbilitiesSection entry={entry} />
        <StatsSection entry={entry} />
      </div>
      <div className="BottomNavbar"></div>
    </>
  );
}

export default App;
