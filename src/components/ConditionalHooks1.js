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

const ConditionalHooks1 = () => {
  const [list, setList] = useState([]);

  const handleFetch = () => {
    setList(LIST);
  };

  if (!list.length) {
    return (
      <div>
        <h2>Exemple 1 - Conditional Hooks in React</h2>
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
  return (
    <div>
      <h3>List data</h3>
      <hr />
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li key={item.id}>
      <span>{item.title}</span>
    </li>
  );
};

export default ConditionalHooks1;
