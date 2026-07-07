import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BasicInformation() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Basic Information
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          These details are displayed to your customers inside
          Telegram.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Product Name
          <span className="ml-1 text-destructive">*</span>
        </label>

        <Input
          placeholder="Premium Sneakers"
          className="rounded-xl"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Description
        </label>

        <Textarea
          placeholder="Describe your product..."
          rows={6}
          className="resize-none rounded-xl"
        />
      </div>
    </section>
  );
}