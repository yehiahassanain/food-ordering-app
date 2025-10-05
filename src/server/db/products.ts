import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getBestSellers = cache(
  (limit?) => {
    const bestSellers = db.product.findMany({
      where: {
        orders: {
          some: {},
        },
      },
      orderBy: {
        orders: {
          _count: "desc",
        },
      },
      include: {
        sizes: true,
        extra: true,
      },
       take: limit,
    });
    return bestSellers;
  },
  ["Best-sellers"],
  { revalidate: 60 }
);
