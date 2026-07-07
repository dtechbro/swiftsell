import { Save } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface AddProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddProductDialog({
  open,
  onOpenChange,
}: AddProductDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          max-h-[90vh]
          overflow-y-auto
          sm:max-w-2xl
        "
      >
        <DialogHeader>
          <DialogTitle>
            Add Product
          </DialogTitle>

          <DialogDescription>
            Create a new product for your Telegram store.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          {/* Basic Information */}

          <section className="space-y-5">
            <div>
              <h3 className="font-semibold">
                Basic Information
              </h3>

              <p className="text-sm text-muted-foreground">
                The essential details your customers will see.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Product Name *
              </label>

              <Input placeholder="Premium Sneakers" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Description
              </label>

              <Textarea
                placeholder="Describe your product..."
                rows={5}
              />
            </div>
          </section>

          {/* Organization */}

          {/* <section className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Category
              </label>

              <Input placeholder="Footwear" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Brand
              </label>

              <Input placeholder="Nike" />
            </div>
          </section> */}

          {/* Pricing */}

          <section className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Price (₦)
              </label>

              <Input
                type="number"
                placeholder="48000"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Stock Quantity
              </label>

              <Input
                type="number"
                placeholder="50"
              />
            </div>
          </section>

          {/* Image Upload Placeholder */}

          <section
            className="
              rounded-2xl
              border
              border-dashed
              border-border
              p-6
              text-center
            "
          >
            <p className="font-medium">
              Product Images
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Image uploads will be available soon.
            </p>
          </section>

          {/* Footer */}

          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-xl hover:cursor-pointer"
            >
              Cancel
            </Button>

            <Button className="rounded-xl hover:cursor-pointer">
              <Save className="mr-2 h-4 w-4" />
              Save Product
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
