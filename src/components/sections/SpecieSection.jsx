import { getHeightString, getWeightString } from "../../../utils/utils";
import {
  TitledSection,
  SubtitledBox,
} from "../common/containers/sectionsContainers";

export default function SpecieSection({ entry }) {
  return (
    <TitledSection title="Specie">
      <SubtitledBox title="Description">{entry.description.text}</SubtitledBox>
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
