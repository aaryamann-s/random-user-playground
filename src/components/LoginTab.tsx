import { LabelMedium } from "baseui/typography";
import { StatefulTooltip } from "baseui/tooltip";
import { Login } from "../types/Person";
import { FaIdCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import { MdOutlinePassword } from "react-icons/md";

export default function LoginTab(props: { details: Login }) {
  const { details } = props;
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
        <FaIdCard />
        <LabelMedium style={{ color: "white" }}>{details.uuid}</LabelMedium>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <FaUser />

        <LabelMedium style={{ color: "white" }}>{details.username}</LabelMedium>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <MdOutlinePassword />

        <LabelMedium style={{ color: "white" }}>
          <StatefulTooltip content={details.password} returnFocus autoFocus>
            ***************
          </StatefulTooltip>
        </LabelMedium>
      </div>
    </div>
  );
}
