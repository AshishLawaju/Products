import { adminProps } from "@/types/types";
import { FC } from "react";

const Admin: FC<adminProps> = ({ name, email, adminNo }) => {
  return (
    <div>
      <h2>name: {name}</h2>
      <p>Email: {email}</p>
      <p>AdminNo:{adminNo}</p>
    </div>
  );
};

export default Admin;
