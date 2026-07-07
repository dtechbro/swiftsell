import { Store } from "lucide-react";
type LogoProps = {
  onClick?: () => void;
};

export default function Logo({ onClick }: LogoProps) {
  return (
    <a
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3 select-none"
      aria-label="Homepage"
    >
      <div
        className="
          flex h-11 w-11 items-center justify-center
          rounded-xl
          bg-primary
          text-primary-foreground
          shadow-lg
          transition-all
          duration-300
          group-hover:-translate-y-0.5
          group-hover:scale-105
        "
      >
        <Store className="h-5 w-5" strokeWidth={2.5} />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight">
          StorePilot
        </span>

        <span className="text-xs text-muted-foreground">
          Telegram Commerce
        </span>
      </div>
    </a>
  );
}