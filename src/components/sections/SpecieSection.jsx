import { getHeightString, getWeightString } from "../../../utils/utils";
import {
  TitledSection,
  SubtitledBox,
} from "../common/containers/sectionsContainers";
import TextWaiting from "../common/TextWaiting";

export default function SpecieSection({ entry }) {
  return (
    <TitledSection title="Specie">
      <SubtitledBox title="Description">
        {entry.description.text ? (
          entry.description.text
        ) : (
          <TextWaiting wordsLong={20} />
        )}
      </SubtitledBox>
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
}
