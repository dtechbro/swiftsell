import { Boxes, Plus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

interface EmptyProductsProps {
  onAddProduct: () => void;
}

export default function EmptyProducts({
  onAddProduct,
}: EmptyProductsProps) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-dashed
        border-border
        bg-card/40
        px-6
        py-16
        text-center
        backdrop-blur
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-3xl
        "
      />

      <div className="relative">
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-2xl
            bg-primary/10
            text-primary
          "
        >
          <Boxes className="h-10 w-10" />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          No products yet
        </h2>

        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Start building your Telegram store by adding your first
          product or importing an existing catalog.
        </p>

        <div
          className="
            mt-8
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <Button
            onClick={onAddProduct}
            className="rounded-xl hover:cursor-pointer"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>

          <Button
            disabled
            variant="outline"
            className="rounded-xl hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Upload className="mr-2 h-4 w-4" />
            Import CSV
          </Button>
        </div>
      </div>
    </div>
  );
};
