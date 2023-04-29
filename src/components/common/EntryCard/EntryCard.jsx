import Type from "../Type/Type";
import styles from "./EntryCard.module.css";
import { upperCaseChar0 } from "../../../../utils/utils";

function EntryCard({ children, entry }) {
  return (
    <div className={styles.EntryCard}>
      {/* IZQUIERDO */}
      <Info entry={entry} />

      {/* DERECHO */}
      <Picture src={entry.urlToImage} alt={entry.genera.en} />
    </div>
  );
}

function Info({ entry }) {
  const { name, id, genera, types } = entry;
  const formatId = (id) => {
    return `#${String(id).padStart(4, "0")}`;
  };

  return (
    <div className={styles.Info}>
      <div className={styles.text_wrapper}>
        <h1>{upperCaseChar0(name)}</h1>
        <span>{formatId(id)}</span>
        <p>{genera.en}</p>
      </div>

      <div className={styles.types_wrapper}>
        {types.map((t, i) => (
          <Type type={t} key={i} />
        ))}
      </div>
    </div>
  );
}

function Picture({ src, alt = "Pokemon Picture" }) {
  return (
    <div className={styles.Picture}>
      <img src={src} alt={alt} style={{ width: "100%" }} />
    </div>
  );
}

export default EntryCard;