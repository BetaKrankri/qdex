import { useEffect, useState } from "react";
import {
  fetchPokemonEntry,
  initialState as initialEntry,
} from "../utils/utilsAPI";
import "./App.css";
import EntryCard from "./components/entrycard/EntryCard";
import TitledSection, {
  Abilities,
  SubtitledBox,
} from "./components/sections/TitledSection";
import { getHeightString, getWeightString } from "../utils/utils";

function App() {
  const [currentId, setCurrentId] = useState(1);
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
    }, 3000);
    return () => {
      clearTimeout(tID);
    };
  }, [entry]);

  ////////// start Components ////////
  const SpecieSection = () => (
    <TitledSection title="Specie">
      <SubtitledBox title="Description">{entry.description.text}</SubtitledBox>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <SubtitledBox title="Height">
          {getHeightString(entry.height)}
        </SubtitledBox>
        <SubtitledBox title="Weight">
          {getWeightString(entry.weight)}
        </SubtitledBox>
      </div>
    </TitledSection>
  );

  const AbilitiesSection = () => {
    const hiddenAbility = entry.abilities.find((a) => a.isHidden);
    const commonAbilities = entry.abilities.filter((a) => !a.isHidden);

    return (
      <TitledSection title="Abilities">
        <div>
          {commonAbilities.map((ca, i) => (
            <div style={{}} key={i}>
              {ca.name}
            </div>
          ))}
        </div>
        {hiddenAbility && <div style={{}}>{hiddenAbility.name}</div>}
      </TitledSection>
    );
  };

  ////////// Ending Components ////////

  return (
    <>
      <div className="Header">
        <EntryCard entry={entry} />
      </div>
      <div className="Body">
        <SpecieSection />
        <AbilitiesSection />
        <TitledSection title="Stats"></TitledSection>
      </div>
      <div className="BottomNavbar"></div>
    </>
  );
}

function SpecieSection() {}

export default App;
