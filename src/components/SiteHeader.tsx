import Link from "next/link";

const links = [
  { href: "/try", label: "Try" },
  { href: "/method", label: "Method" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg tracking-tight text-ink transition-opacity duration-200 group-hover:opacity-80">
            Document Shock Filter
          </span>
          <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
            LCR-WSF research demo
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-1 text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
