import React, { useState } from "react";

const LIST = [
  {
    id: "1",
    title: "The Road to React",
  },
  {
    id: "2",
    title: "The Road to GraphQL",
  },
];

const ConditionalHooks2 = () => {
  const [list, setList] = useState([]);

  const handleFetch = () => {
    setList(LIST);
  };

  if (!list.length) {
    return (
      <div>
        <h2>Exemple 2 - Conditional Hooks in React</h2>
        <hr />
        <button type="button" onClick={handleFetch}>
          Fetch
        </button>
      </div>
    );
  }

  return (
    <div>
      <List list={list} />
    </div>
  );
};

const List = ({ list }) => {
  const [selectedId, setSelectedId] = React.useState(list[0].id);
  return (
    <div>
      <h3>List data</h3>
      <hr />
      <ul>
        {list.map((item) => (
          <Item
            key={item.id}
            item={item}
            selectedId={selectedId}
            onSelectedId={setSelectedId}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, selectedId, onSelectedId }) => {
  const handleSelect = () => {
    onSelectedId(item.id);
  };

  const selectedStyle = {
    fontWeight: selectedId === item.id ? "bold" : "normal",
  };

  return (
    <li key={item.id} style={selectedStyle}>
      <span>{item.title}</span>{" "}
      <button type="button" onClick={handleSelect}>
        Select
      </button>
    </li>
  );
};

export default ConditionalHooks2;
