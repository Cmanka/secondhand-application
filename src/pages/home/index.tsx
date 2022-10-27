import React, { FC } from "react";
import { List } from "ui";

const Home: FC = () => {
  const data = [
    { key: 1, label: "123" },
    { key: 2, label: "1234" },
  ];

  return <List data={data}>{({ key, label }) => <div key={key}>{label}</div>}</List>;
};

export { Home };
