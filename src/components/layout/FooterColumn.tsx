interface FooterColumnProps {
  title: string;
  links: string[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">
        {title}
      </h4>

      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer transition hover:text-foreground"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};
