import { upperCaseChar0, formatId } from "../../../../utils/utils";
import Type from "../Type/Type";

function Card({ children, entry }) {
  return (
    <div
      style={{
        background: "hsl(0, 0%, 20%)",
        borderRadius: "10px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 120px",
        gridAutoRows: "120px",
      }}
    >
      <Info entry={entry} />

      <div
        style={{
          padding: "2%",
          background: "hsl(0, 0%, 90%)",
          borderRadius: "50% 0 0 50%",
        }}
      >
        <Picture url={entry.urlToImage} />
      </div>
    </div>
  );
}

function Info({ entry }) {
  return (
    <div
      style={{
        padding: "1rem .5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gridTemplateRows: "repeat(auto-fill, 1fr)",
          rowGap: ".5rem",
        }}
      >
        <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          {upperCaseChar0(entry.name)}
        </p>
        <div style={{ fontSize: ".875rem", display: 'grid', placeItems: 'center' }}>{formatId(entry.id)}</div>
        <div
          style={{
            fontSize: ".8rem",
            fontWeight: "lighter",
            gridColumn: '1 / -1'
          }}
        >
          {entry.genera.en}
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
        {entry.types.map((t, i) => (
          <Type type={t} key={i} />
        ))}
      </div>
    </div>
  );
}

function Picture({ url }) {
  return (
    <>
      <img src={url} alt={url} style={{ width: "100%" }} />
    </>
  );
}

export default Card;
