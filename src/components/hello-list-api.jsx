import { useEffect, useState } from "react";

export const HelloListApi = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4").then((response) => {
      if (response) {
        response.json().then((data) => {
          const newNames = [];
          data.results.forEach((result) => {
            newNames.push(result.name.first);
          });
          setNames(newNames);
        });
      }
    });
  }, []);

  return (
    <ul>
      {Boolean(names.length) &&
        names.map((name, index) => {
          const key = `${name}${index}`;
          return <li key={key}>{name}</li>;
        })}
    </ul>
  );
};
