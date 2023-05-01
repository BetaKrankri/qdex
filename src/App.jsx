import { useEffect, useState } from "react";
import {
  fetchPokemonEntry,
  initialState as initialEntry,
} from "../utils/utilsAPI";
import "./App.css";

import SpecieSection from "./components/sections/SpecieSection";
import AbilitiesSection from "./components/sections/AbilitySection";
import StatsSection from "./components/sections/StatsSection";
import Card from "./components/common/EntryCard/Card";

function App() {
  const [currentId, setCurrentId] = useState(830);
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
    }, 2000);
    return () => {
      clearTimeout(tID);
    };
  }, [entry]);

  return (
    <>
      <div className="Header">
        <Card entry={entry} />
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
