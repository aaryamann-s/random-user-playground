import { useState } from "react";
import { Person } from "../types/Person";
import { Avatar } from "baseui/avatar";
import { useStyletron } from "baseui";
import { StatefulTabs, Tab, FILL } from "baseui/tabs-motion";
import AddressTab from "./AddressTab";
import ContactTab from "./ContactTab";
import LoginTab from "./LoginTab";

export default function PersonCard(props: { key: string; person: Person }) {
  const [css, theme] = useStyletron();
  const { person } = props;
  const fullName = person.name.first + " " + person.name.last;
  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #1116",
        borderRadius: 4,
        gap: 16,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: 32,
        }}
      >
        <Avatar
          name={fullName}
          size="scale1600"
          src={person.picture.thumbnail}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: 0,
          }}
        >
          <h4>{fullName}</h4>
          <p>{person.location.state + ", " + person.location.country}</p>
        </div>
      </div>
      <StatefulTabs
        //   fill={FILL.fixed}
        overrides={{
          Root: {
            style: {
              width: "100%",
            },
          },
          TabBar: {
            style: {
              color: "red",
            },
          },
          TabBorder: {
            style: {
              backgroundColor: "#6BAA75",
            },
          },
          TabHighlight: {
            style: {
              backgroundColor: "#528E5C",
            },
          },
        }}
      >
        <Tab
          overrides={{
            Tab: {
              style: {
                backgroundColor: "transparent",
                color: "white",
                ":hover": {
                  background: "#1a1a1a",
                },
              },
            },
          }}
          title="Address"
        >
          <AddressTab address={person.location} />
        </Tab>
        <Tab
          overrides={{
            Tab: {
              style: {
                backgroundColor: "transparent",
                color: "white",
                ":hover": {
                  background: "#1a1a1a",
                },
              },
            },
          }}
          title="Contact"
        >
          <ContactTab
            email={person.email}
            cell={person.cell}
            phone={person.phone}
          />
        </Tab>
        <Tab
          overrides={{
            Tab: {
              style: {
                backgroundColor: "transparent",
                color: "white",
                ":hover": {
                  background: "#1a1a1a",
                },
              },
            },
          }}
          title="Login Details"
        >
          <LoginTab details={person.login} />
        </Tab>
      </StatefulTabs>
    </div>
  );
}
