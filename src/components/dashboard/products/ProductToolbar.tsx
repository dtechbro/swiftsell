import { Search, Plus, Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProductToolbarProps {
  onAddProduct: () => void;
}

export default function ProductToolbar({
  onAddProduct,
}: ProductToolbarProps) {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        bg-card/50
        p-4
        backdrop-blur
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}

      <div className="relative w-full lg:max-w-sm">
        <Search
          className="
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-muted-foreground
          "
        />

        <Input
          disabled
          placeholder="Search products..."
          className="pl-10 hover:cursor-not-allowed"
        />
      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-3">
        <Button
            disabled
            variant="outline"
            className="rounded-xl hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Upload className="mr-2 h-4 w-4" />
          Import CSV
        </Button>

        <Button
          onClick={onAddProduct}
          className="rounded-xl hover:cursor-pointer"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
    </div>
  );
};
