import { getHeightString, getWeightString } from "../../../utils/utils";

// contenedor con titulo superior
const TitledSection = ({ children, title }) => {
  return (
    <section
      className="TitledSection"
      style={{
        margin: "1rem 0 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".875rem",
      }}
    >
      <h2>{title}</h2>
      <div
        className="Card"
        style={{
          width: "100%",
          minHeight: 10,
          backgroundColor: "hsl(0,0%,15%)",
          padding: ".875rem",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </section>
  );
};

// contenedor con titulo inferior pequeño
const SubtitledBox = ({ children, title }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".25rem",
        fontSize: ".65rem",
      }}
    >
      <div
        style={{
          margin: "3px",
          border: "solid 1px hsl(0,0%,50%)",
          borderRadius: "5px",
          padding: ".25rem .25rem",
          color: "white",
          fontSize: ".875rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        {children}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

/////////////// Secciones //////////////
export const SpecieSection = ({ entry }) => (
  <TitledSection title="Specie">
    <SubtitledBox title="Description">{entry.description.text}</SubtitledBox>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        margin: ".5rem",
        gap: ".5rem",
      }}
    >
      <SubtitledBox title="Height">
        {getHeightString(entry.height)}
      </SubtitledBox>
      <SubtitledBox title="Weight">
        {getWeightString(entry.weight)}
      </SubtitledBox>
    </div>
  </TitledSection>
);

export const AbilitiesSection = ({ entry }) => {
  const hiddenAbility = entry.abilities.find((a) => a.isHidden);
  const commonAbilities = entry.abilities.filter((a) => !a.isHidden);

  const AbilityView = ({ abilityObj }) => {
    const hiddenStyle = { border: "solid white 1px", margin: "1rem 0 0" };
    const commonStyle = { backgroundColor: "hsl(0,0%,20%)" };
    const selectiveStyle = abilityObj.isHidden ? hiddenStyle : commonStyle;
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
        {abilityObj.name}
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
          <AbilityView abilityObj={ca} key={i} />
        ))}
      </div>
      {hiddenAbility && <AbilityView abilityObj={hiddenAbility} />}
    </TitledSection>
  );
};

export default TitledSection;
