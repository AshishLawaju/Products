import { ProductProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Product = ({ title, image, price ,id}: ProductProps) => {
  return (
    <div className="border-2 border-black bg-[#f7f7f7] p-2" >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="h-24 w-48 object-cover rounded-sm border border-black"
      />
      <h2>{title}</h2>
      <p>Price : ${price}</p>
      <Link
        href={`/products/${id}`}
        className="rounded-md bg-black text-white py-1"
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;
