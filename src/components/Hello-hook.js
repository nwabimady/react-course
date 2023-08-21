import { useState, useEffect, useDebugValue } from "react";

export const useRandomUsers = (numberOfUsers = 1) => {
  const [users, setusers] = useState([]);

  useDebugValue(numberOfUsers);

  useEffect(() => {
    if (numberOfUsers <= 0) {
      console.error("Munimum number of users is 1");
      return;
    }
    fetch(`https://randomuser.me/api/?results=${numberOfUsers}`).then(
      (response) => {
        if (response) {
          response.json().then((data) => {
            setusers(data.results);
          });
        }
      }
    );
  }, [numberOfUsers]);

  return users;
};
