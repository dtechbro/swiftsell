import { useState } from "react";
import { motion } from "motion/react";

import PageHeader from "@/components/dashboard/PageHeader";

import ProductToolbar from "./ProductToolbar";
import EmptyProducts from "./EmptyProducts";
import AddProductDialog from "./AddProductDialog";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
        className="relative space-y-8"
      >
        {/* Background Grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-[0.04]
            [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
            [background-size:44px_44px]
          "
        />

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            -z-10
            h-80
            w-80
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <PageHeader
          title="Products"
          description="Manage your product catalog, import products, and create new listings."
        />

        <ProductToolbar
          onAddProduct={() => setOpen(true)}
        />

        <EmptyProducts
          onAddProduct={() => setOpen(true)}
        />
      </motion.div>

      <AddProductDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};
