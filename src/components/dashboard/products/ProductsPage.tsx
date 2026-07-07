import { useState } from "react";

import PageHeader from "@/components/dashboard/PageHeader";

import ProductToolbar from "./ProductToolbar";
import EmptyProducts from "./EmptyProducts";
import AddProductDialog from "./AddProductDialog";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="space-y-8">
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
      </div>

      <AddProductDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};
