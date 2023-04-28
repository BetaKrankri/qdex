import "./EntryCard.css";

function EntryCard({ children, entry }) {
  return (
    <div className="EntryCard">
      <div className="right-wrapper">
        <h1>{entry.name}</h1>
        <p className="id">{entry.id}</p>
        <p className="genera">{entry.genera.en}</p>
        <div className="types-wrapper">
          {entry.types.map((type, i) => (
            <div className="type" key={i}>
              {type}
            </div>
          ))}
        </div>
      </div>
      <div className="left-wrapper">
        <img src={entry.urlToImage} alt={entry.genera.en} />
      </div>
    </div>
  );
}

export default EntryCard;
