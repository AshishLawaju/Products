import { Span } from "next/dist/trace";
import React from "react";

const Button = ({ title, loading }: { title: string; loading?: boolean }) => {
  return (
    <button className="border-2 bg-black text-white border-black py-2 px-5 rounded-md">
      {loading ? "Loading.." : <span>{title}</span>}
    </button>
  );
};

export default Button;
