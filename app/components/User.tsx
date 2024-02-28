import { FC } from "react";

type UserProps = {
  username: string;
  age: number;
  course: string;
};
const User: FC<UserProps> = ({ username, age, course }) => {
  return (
    <div>
      <h2>UserName:{username}</h2>
      <p>Age:{age}</p>
      <p>course:{course}</p>
    </div>
  );
};

export default User;
