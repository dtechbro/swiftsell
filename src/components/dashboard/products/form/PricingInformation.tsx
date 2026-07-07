import { Input } from "@/components/ui/input";

export default function PricingInformation() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Pricing & Inventory
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Configure pricing, stock levels, and optional product
          identifiers.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Price (₦)
          </label>

          <Input
            type="number"
            placeholder="48000"
            className="rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Compare-at Price
          </label>

          <Input
            type="number"
            placeholder="60000"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Stock Quantity
          </label>

          <Input
            type="number"
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
    </section>
  );
};
