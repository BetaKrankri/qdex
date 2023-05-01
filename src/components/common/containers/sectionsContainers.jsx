// contenedor con titulo superior
export const TitledSection = ({ children, title }) => {
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
export const SubtitledBox = ({ children, title }) => {
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
          flex: 1,
          display: "grid",
          placeItems: "center",
          margin: "3px",
          border: "solid 1px hsl(0,0%,50%)",
          borderRadius: "5px",
          padding: ".25rem .25rem",
          color: "white",
          fontSize: ".75rem",
          textAlign: "center",
          lineHeight: '1.4',
          width: "100%",
        }}
      >
        {children}
      </div>
      <h3>{title}</h3>
    </div>
  );
};
