import { cache } from "@/lib/cache";
import { db } from "@/lib/prisma";

export const getProductsByCategories = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extra: true,
          },
        },
      },
      orderBy: {
        products: {
          _count: "desc",
        },
      },
    });
    return products;
  },
  ["Products-by-categories"],
  { revalidate: 3600 }
);
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
