import { motion } from "motion/react";

import ProductCard from "./ProductCard";

const demoProducts = [
  {
    name: "Premium Sneakers",
    category: "Footwear",
    price: 48000,
    stock: 18,
    published: true,
  },
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 125000,
    stock: 9,
    published: true,
  },
  {
    name: "Luxury Hoodie",
    category: "Fashion",
    price: 36000,
    stock: 22,
    published: false,
  },
];

export default function ProductGrid() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >
      {demoProducts.map((product) => (
        <motion.div
          key={product.name}
          variants={{
            hidden: {
              opacity: 0,
              y: 18,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <ProductCard {...product} />
        </motion.div>
      ))}
    </motion.div>
  );
};
