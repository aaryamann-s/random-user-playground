import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { LabelMedium } from "baseui/typography";

export default function ContactTab(props: {
  email: string;
  phone: string;
  cell: string;
}) {
  const { email, phone, cell } = props;
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
        <IoIosMail />
        <LabelMedium style={{ color: "white" }}>{email}</LabelMedium>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <BsFillTelephoneFill />

        <LabelMedium style={{ color: "white" }}>{cell}</LabelMedium>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <GiRotaryPhone />

        <LabelMedium style={{ color: "white" }}>{phone}</LabelMedium>
      </div>
    </div>
  );
}
