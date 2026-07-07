import {
  Globe,
  FileText,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Badge } from "@/components/ui/badge";

export default function PublishSettings() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Publish Settings
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Decide how this product should appear in your Telegram
          storefront.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Visibility
          </label>

          <Select defaultValue="published">
            <SelectTrigger className="rounded-xl">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="published">
                Published
              </SelectItem>

              <SelectItem value="draft">
                Draft
              </SelectItem>

              <SelectItem value="hidden">
                Hidden
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Product Status
          </label>

          <Select defaultValue="active">
            <SelectTrigger className="rounded-xl">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="active">
                Active
              </SelectItem>

              <SelectItem value="inactive">
                Inactive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        className="
          flex
          flex-wrap
          gap-3
          rounded-2xl
          border
          bg-card/40
          p-4
        "
      >
        <Badge className="rounded-full">
          <Globe className="mr-2 h-3.5 w-3.5" />
          Visible in Telegram
        </Badge>

        <Badge
          variant="secondary"
          className="rounded-full"
        >
          <FileText className="mr-2 h-3.5 w-3.5" />
          Drafts supported
        </Badge>
      </div>
    </section>
  );
};
