import { useEffect, useState } from "react";

export const HelloListApi = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    //     fetch("https://randomuser.me/api/?results=4").then((response) => {
    //       if (response) {
    //         response.json().then((data) => {
    //           const newNames = [];
    //           data.results.forEach((result) => {
    //             newNames.push(result.name.first);
    //           });
    //           setNames(newNames);
    //         });
    //       }
    //     });
    //   }, []);

    const fetchNames = async () => {
      const response = await fetch("https://randomuser.me/api/?results=4");
      if (response) {
        const data = await response.json();
        const newNames = [];
        for (const result of data.result) {
          newNames.push(result.name.first);
        }
        setNames(newNames);
      }
    };

    fetchNames();
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
