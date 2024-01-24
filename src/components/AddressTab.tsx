import { Location } from "../types/Person";
import { FaHouse, FaLocationArrow } from "react-icons/fa6";
import { LabelMedium } from "baseui/typography";

export default function AddressTab(props: { address: Location }) {
  const { address } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "white",
        gap: 8,
      }}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <FaHouse />
        <LabelMedium style={{ color: "white" }}>
          {address.street.number}, {address.street.name} - {address.postcode}
        </LabelMedium>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <FaLocationArrow />

        <LabelMedium style={{ color: "white" }}>
          {address.coordinates.latitude}, {address.coordinates.longitude}
        </LabelMedium>
      </div>
    </div>
  );
}
