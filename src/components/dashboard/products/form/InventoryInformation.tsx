import { Input } from "@/components/ui/input";

export default function InventoryInformation() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Inventory
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Manage stock availability and internal product identifiers.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Stock Quantity
          </label>

          <Input
            type="number"
            min={0}
            placeholder="50"
            className="rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            SKU
          </label>

          <Input
            placeholder="SKU-0001"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Low Stock Alert
          </label>

          <Input
            type="number"
            min={0}
            placeholder="5"
            className="rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Barcode (Optional)
          </label>

          <Input
            placeholder="1234567890123"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
