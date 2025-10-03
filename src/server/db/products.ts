import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
  () => {
    const bestSellers = db.product.findMany({
      include: {
        sizes: true,
        extra: true,
      },
    });
    return bestSellers;
  },
  ["Best-sellers"],
  { revalidate: 60 }
);
