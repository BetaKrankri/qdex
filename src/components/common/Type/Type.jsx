const style = {
  width: "100%",
  border: "solid 1px white",
  padding: ".25rem",
  minWidth: 60,
  borderRadius: 50,
  display: "grid",
  placeItems: "center",
  fontSize: '.8rem',
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
