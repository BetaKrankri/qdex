function TitledSection({ children, title }) {
  return (
    <section
      className="TitledSection"
      style={{
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
          // padding: ".875rem",
          borderRadius: "5px",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function SubtitledBox({ children, title }) {
  return (
    <div
      style={{
        margin: ".5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".25rem",
        fontSize: ".65rem",
      }}
    >
      <div
        style={{
          border: "solid 1px hsl(0,0%,50%)",
          borderRadius: "5px",
          padding: ".25rem .5rem",
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
}

export function Abilities(abilities) {
  return <div></div>;
}

export default TitledSection;
