/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import MenuItem from "./MenuItem";
import { Product } from "@prisma/client";
import { ProductWithRelations } from "@/types/product";

const Menu = ({ items }: { items: ProductWithRelations[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
      {items.map((item: any) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
