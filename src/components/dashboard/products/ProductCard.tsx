import {
  Package,
  Pencil,
  Trash2,
  Boxes,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  stock: number;
  published?: boolean;
}

export default function ProductCard({
  name,
  category,
  price,
  stock,
  published = true,
}: ProductCardProps) {
  return (
    <Card
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-card/60
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-2xl
      "
    >
      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-br
          from-primary/10
          via-transparent
          to-chart-2/10
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Image */}

      <div
        className="
          relative
          flex
          h-44
          items-center
          justify-center
          border-b
          bg-muted/30
        "
      >
        <Package
          className="
            h-12
            w-12
            text-muted-foreground
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      <div className="relative space-y-5 p-5">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-semibold">
              {name}
            </h3>

            <Badge
              variant={
                published
                  ? "default"
                  : "secondary"
              }
            >
              {published ? "Published" : "Draft"}
            </Badge>
          </div>

          <p className="mt-2 text-sm text-muted-foreground">
            {category}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-muted/40 p-3">
            <p className="text-xs text-muted-foreground">
              Price
            </p>

            <p className="mt-1 font-semibold">
              ₦{price.toLocaleString()}
            </p>
          </div>

          <div className="rounded-xl bg-muted/40 p-3">
            <p className="text-xs text-muted-foreground">
              Stock
            </p>

            <p className="mt-1 font-semibold">
              {stock}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Boxes className="h-4 w-4" />

            <span>Telegram Store</span>
          </div>

          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="
                rounded-xl
                transition-all
                hover:cursor-pointer
                hover:border-primary/40
              "
            >
              <Pencil className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="
                rounded-xl
                text-destructive
                transition-all
                hover:cursor-pointer
              "
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
