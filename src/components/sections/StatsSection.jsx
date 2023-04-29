import { TitledSection } from "../common/containers/sectionsContainers";

function StatsSection({ entry }) {
  const totalBaseStats = Object.values(entry.stats).reduce((a, i) => a + i);
  const stats = entry.stats;

  return (
    <TitledSection title="Base Stats">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StatsGraph stats={stats} />
        <p>
          TOTAL <span>{totalBaseStats}</span>
        </p>
      </div>
    </TitledSection>
  );
}

function StatsGraph({ stats }) {
  const getBarLegend = (statKey) => {
    return statKey === "hp"
      ? "HP"
      : statKey === "attack"
      ? "Attack"
      : statKey === "defense"
      ? "Defense"
      : statKey === "special-attack"
      ? "Special Attack"
      : statKey === "special-defense"
      ? "Special Defense"
      : statKey === "speed"
      ? "Speed"
      : statKey;
  };
  const maxStatValue = Math.max(...Object.values(stats));
  const getBarValue = (statValue) => {
    return (statValue * 100) / maxStatValue;
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        margin: ".5rem 0 1rem",
      }}
    >
      {Object.keys(stats).map((statKey) => (
        <GraphBar
          title={getBarLegend(statKey)}
          width={getBarValue(stats[statKey])}
          value={stats[statKey]}
          key={statKey}
        />
      ))}
    </div>
  );
}

function GraphBar({ title, value, width }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: ".5rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          minWidth: "100px",
          width: "25%",
          backgroundColor: "hsl(0, 0%, 27%)",
          display: "grid",
          placeItems: "center",
          fontSize: ".6rem",
        }}
      >
        <p>{title}</p>
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: `${width}%`,
            backgroundColor: "hsl(0, 0%, 35%)",
            borderRadius: ".0 .5rem .5rem 0",
            padding: "3px .5rem",
            display: "flex",
            justifyContent: "right",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
