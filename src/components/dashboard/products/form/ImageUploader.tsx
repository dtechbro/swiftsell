import {
  ImagePlus,
  Clock3,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function ImageUploader() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Product Images
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Upload product images to help customers identify your products.
        </p>
      </div>

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-dashed
          border-border
          bg-card/40
          p-10
          transition-all
          duration-300
        "
      >
        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-52
              w-52
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-primary/15
              blur-3xl
            "
          />
        </div>

        <div className="relative flex flex-col items-center text-center">
          <div
            className="
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
            <ImagePlus className="h-10 w-10" />
          </div>

          <h4 className="mt-6 text-lg font-semibold">
            Image uploads coming soon
          </h4>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            For the initial release, products can be added without
            images. Image uploads will be available in an upcoming
            update.
          </p>

          <Badge
            variant="secondary"
            className="mt-6 rounded-full px-4 py-1"
          >
            <Clock3 className="mr-2 h-3.5 w-3.5" />
            Coming Soon
          </Badge>
        </div>
      </div>
    </section>
  );
};
