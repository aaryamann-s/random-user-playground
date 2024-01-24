import "./App.css";
import usePerson from "./lib/usePerson";
import PersonCard from "./components/PersonCard";
import { Button } from "baseui/button";
import { StatefulPerson } from "./types/Person";
import { useState } from "react";
import { PLACEMENT, StatefulPopover } from "baseui/popover";
import { StatefulMenu } from "baseui/menu";
import { ChevronDown } from "baseui/icon";

const COLUMN_OPTIONS = [
  {
    label: "1",
  },
  {
    label: "2",
  },
  {
    label: "3",
  },
];

function App() {
  const { persons, fetchPerson } = usePerson();
  const [columns, setColumns] = useState(3);
  return (
    <>
      <h1>Random Users</h1>
      <div
        style={{
          marginBottom: 32,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <Button onClick={()=>fetchPerson()}>Get A Person</Button>
        <StatefulPopover
          focusLock
          placement={PLACEMENT.bottomRight}
          content={({ close }) => (
            <StatefulMenu
              items={COLUMN_OPTIONS}
              onItemSelect={(e) => {
                const newColumnCount = parseInt(e.item.label);
                setColumns(newColumnCount);
                close();
              }}
              overrides={{
                List: { style: { width: "75px" } },
              }}
            />
          )}
        >
          <Button endEnhancer={<ChevronDown size={24} />}>
            Column Count ({columns})
          </Button>
        </StatefulPopover>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns},1fr)`,
          gap: 32,
        }}
      >
        {persons.map((person: StatefulPerson) =>
          person.fetching ? (
            // <Skeleton animation />
            <p>Loading...</p>
          ) : (
            person.data && (
              <PersonCard key={person.data.id.value} person={person.data} />
            )
          )
        )}
      </div>
    </>
  );
}

export default App;
