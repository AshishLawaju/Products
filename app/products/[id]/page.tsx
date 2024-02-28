import Product from "@/app/components/Product";
import { ProductProps } from "@/types/types";

const page = ({ params: { id } }: { params: { id: number } }) => {
  const products: ProductProps[] = [
    {
      title: "Canon Camera",
      price: 777,
      image: "/products/camera.jpg",
      id: 1,
    },
    {
      title: "bag",
      price: 222,
      image: "/products/bag.jpg",
      id: 2,
    },
    {
      title: "Fredge",
      price: 111,
      image: "/products/fredge.webp",
      id: 3,
    },
    {
      title: "Apple Iphone",
      price: 555,
      image: "/products/iphone.jpg",
      id: 4,
    },
  ];

  const product = products.find((prodect) => prodect.id == id);
  return (
    <div>
      {product ? (
        <Product
          title={product!.title}
          image={product!.image}
          price={product!.price}
          id={product!.id}
        />
      ) : (
        "no such kind of products!"
      )}
    </div>
  );
};

export default page;
