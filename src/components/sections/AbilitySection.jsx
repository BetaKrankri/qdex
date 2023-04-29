import { TitledSection } from "../common/containers/sectionsContainers";
import { upperCaseChar0 } from "../../../utils/utils";

export default function AbilitiesSection ({ entry })  {
  const hiddenAbility = entry.abilities.find((a) => a.isHidden);
  const commonAbilities = entry.abilities.filter((a) => !a.isHidden);

  const AbilityView = ({ ability }) => {
    const hiddenStyle = { border: "solid white 1px", margin: "1rem 0 0" };
    const commonStyle = { backgroundColor: "hsl(0,0%,20%)" };
    const selectiveStyle = ability.isHidden ? hiddenStyle : commonStyle;
    return (
      <div
        style={{
          padding: ".25rem",
          width: "100%",
          display: "grid",
          placeItems: "center",
          borderRadius: ".5rem",
          ...selectiveStyle,
        }}
      >
        {upperCaseChar0(ability.name)}
      </div>
    );
  };

  return (
    <TitledSection title="Abilities">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {commonAbilities.map((ca, i) => (
          <AbilityView ability={ca} key={i} />
        ))}
      </div>
      {hiddenAbility && <AbilityView ability={hiddenAbility} />}
    </TitledSection>
  );
};
