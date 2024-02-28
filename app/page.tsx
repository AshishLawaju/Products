"use client";
import Link from "next/link";
import Button from "./components/Button";
import Product from "./components/Product";
import ProductContainer from "./components/ProductContainer";
import Products from "./components/Products";
import Admin from "./components/Admin";
import { FormEvent, useRef, useState } from "react";
import { EmployeeProps } from "@/types/types";
import Employee from "./components/Employee";
import CustomButton from "./components/CustomButton";
import { Mail } from "lucide-react";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);

  type Status = "idel" | "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("idel");

  //ref
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [user, setUser] = useState<EmployeeProps | null>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const department = departmentRef.current?.value;
    const id = Math.floor(Math.random() * 100);

    if (name && email && department) {
      const newUser: EmployeeProps = {
        id,
        name,
        email,
        department,
      };

      setUser(newUser);
    }
  }
  return (
    <div>
      mian page
      <Button title={"Add to cart"} loading={loading} />
      <div className="my-2">
        <Products />
      </div>
      <ProductContainer>
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-white">Popular Products</h2>
          <Link href="#" className="bg-slate-200 text-slate-800 px-3">
            See All
          </Link>
        </div>
      </ProductContainer>
      <div>
        <section className="py-8">
          <h2>welcome to New Section</h2>
        </section>
        <div>
          Admin
          <Admin name="ashish" email="as@.com" adminNo={2} />
        </div>
        <div>
          Employee
          {user && (
            <Employee
              name={user?.name}
              id={user?.id}
              email={user?.email}
              department={user?.department}
            ></Employee>
          )}
        </div>
      </div>
      <div className="bg-[#8e8585] py-32">
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          action=""
          className="flex flex-col gap-3 mx-auto w-[50%]"
        >
          <input
            className="py-3 "
            type="text"
            placeholder="name"
            id="name"
            ref={nameRef}
          />
          <input
            className="py-3 "
            type="email"
            placeholder="email"
            id="email"
            ref={emailRef}
          />

          <input
            className="py-3 "
            type="text"
            placeholder=" "
            id="department"
            ref={departmentRef}
          />
          <button className="bg-black text-white rounded-md px-5 py-2">
            create user
          </button>
        </form>
      </div>
      <div className="flex gap-24 mx-auto w-[80%] py-12">
        <CustomButton
          title="Custom Button"
          onClick={() => {
            alert("funtion as props ts");
          }}
          variants="primary"
        />
        <CustomButton
          title="Download"
          className="bg-black text-white px-5 py-2 font-bold"
          // href="/product/"
        />
        <CustomButton title="Get Started" icon={<Mail />} />
      </div>
    </div>
  );
};

export default Home;
