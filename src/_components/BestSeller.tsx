import React from "react";
import MainHeading from "@/components/ui/main-heading";
import Image from "next/image";
import Menu from "@/components/ui/menu";

const BestSeller = () => {
    const bestSellers = [
    // Example best seller items
    { id: crypto.randomUUID(), name: "Pizza",desription:"this is a pizza", price: 12.99,image:"../../assets/images/pizza.png" },
     { id: crypto.randomUUID(), name: "Pizza2",desription:"this is a big pizza", price: 50,image:"../../assets/images/pizza.png" },
     { id: crypto.randomUUID(), name: "Pizza3",desription:"this is a small pizza", price: 40,image:"../../assets/images/pizza.png" },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subtitle={"check out"} title={"Our Best Seller"} />
        </div>
       <div className="">
        <Menu items={bestSellers} />
       </div>
      </div>
    </section>
  );
};

export default BestSeller;
