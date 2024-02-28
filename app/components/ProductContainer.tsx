import Link from "next/link";
import Product from "./Product";
import Products from "./Products";
import { ReactNode } from "react";

const ProductContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-9 bg-slate-400 px-6 w-[80%] mx-auto rounded-md">
      {children}
      <Products />
    </div>
  );
};

export default ProductContainer;
