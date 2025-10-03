/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import AddToCardButton  from "./AddToCardButton";
import { ProductWithRelations } from "@/types/product";

export const MenuItem = ({item}:{item:ProductWithRelations}) => {
  return (
    <li>
      <div className="relative w-32 h-32 mx-auto">
        <img src={item.image} alt={item.name} className="object-cover" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold my-3">{item.name}</h3>
        <p className="opacity-30">${item.price.toFixed(2)}</p>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
      <AddToCardButton item={item} />
    </li>
  );
};

export default MenuItem;
