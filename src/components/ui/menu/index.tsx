/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MenuItem from "./MenuItem";
import { Product } from "@prisma/client";
import { ProductWithRelations } from "@/types/product";

const Menu = ({ items }: { items: ProductWithRelations[] }) => {
  return items.length > 0 ? (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  ) : (
    <p className="opacity-25 text-center">No product found</p>
  );
};

export default Menu;
