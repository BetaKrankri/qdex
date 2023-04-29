const style = {
  border: "solid 1px white",
  padding: ".25rem",
  minWidth: 100,
  borderRadius: 50,
  display: "grid",
  placeItems: "center",
};

function Type({ type }) {
  const text = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className="type" style={style}>
      <p>{text}</p>
    </div>
  );
}

export default Type;
