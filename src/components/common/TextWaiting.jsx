
export function TextWaiting({ wordsLong = 10 }) {
    let charsWaiting = Array(wordsLong).fill(null);
    charsWaiting = charsWaiting.map((cw, i) => {
      return (
        <div
          key={i}
          style={{
            height: "1em",
            width: `${0.8 * Math.floor(1 + Math.random() * 10)}em`,
            background: "hsl(0,0%,90%)",
          }}
        />
      );
    });
    console.log("Charswaiting", charsWaiting);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: ".5em" }}>
        {charsWaiting}
      </div>
    );
  }