import { useRandomUsers } from "./Hello-hook";

export const HelloListApi = () => {
  const users = useRandomUsers(5);

  return (
    <ul>
      {Boolean(users.length) &&
        users.map((user, index) => {
          const name = user.name.first;
          const key = `${name}${index}`;
          return <li key={key}>{name}</li>;
        })}
    </ul>
  );
};
