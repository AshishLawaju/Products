import { ProductProps } from "@/types/types";
import Product from "./Product";

const Products = () => {
  const products: ProductProps[] = [
    {
      title: "Canon Camera",
      price: 777,
      image: "/products/camera.jpg",
      id:1
    },
    {
      title: "bag",
      price: 222,
      image: "/products/bag.jpg",
      id:2
    },
    {
      title: "Fredge",
      price: 111,
      image: "/products/fredge.webp",
      id:3
    },
    {
      title: "Apple Iphone",
      price: 555,
      image: "/products/iphone.jpg",
      id:4
    },
  ];
  return (
    <div className="py-12 px-8">
      <div className="grid grid-cols-4 gap-x-12">
        {products.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            image={product.image}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
