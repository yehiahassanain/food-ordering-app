/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label" 
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ProductWithRelations } from "@/types/product";



const AddToCardButton = ({ item }: { item: ProductWithRelations }) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            type="button"
            size={"lg"}
            className="text-white rounded-full mt-4 !px-8"
          >
            Add to Cart
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
          <DialogHeader className="flex items-center">
            <img src={item.image} alt={item.name} width={200} height={200} />
            <DialogTitle>{item.name}</DialogTitle>
            <DialogDescription className="text-center">
              {item.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-10">
            <div className="space-y-2 text-center">
              <label htmlFor="pick-size">Pick Your Quantity</label>
              <PickSize sizes={item.sizes} item={item}/>
            </div>

             <div className="space-y-2 text-center">
              <label htmlFor="pick-extra">Any Extra?</label>
              <PickSExtra extras={item.extra} item={item}/>
            </div>
          </div>
          <DialogFooter >
            <DialogClose asChild>
              <Button variant="outline" className="w-15 h-10">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="w-70 h-10">Add to cart</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddToCardButton;





 function PickSize({sizes, item}:{sizes:any, item:any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size:any)=>(
        <div key={size.id} className="flex items-center space-x-10 border border-gray-100 rounded-md p-2 ">
        <RadioGroupItem value={size.name} id={size.id} />
        <Label htmlFor={size.id}>{size.name} ${item.price + size.price}</Label>
      </div>
      ))}
      
    </RadioGroup>
  )
}




export function PickSExtra({extras, item}:{extras:any, item:any }) {
  return (
      <div>
      {extras.map((extra:any)=>(
        <div key={extra.id} className="flex items-center space-x-10 border border-gray-100 rounded-md p-2 ">
        <Checkbox id={extra.id} />
        <Label htmlFor={extra.id} className="opacity-50">{extra.name}  ${extra.price}</Label>
      </div>
      ))}
      
    </div>
  )
}
