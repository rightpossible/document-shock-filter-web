import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>MIT · University of Ilorin · 20/30GR058</p>
        <div className="flex gap-4">
          <Link
            href="https://github.com/rightpossible/document-shock-filter"
            className="transition-colors duration-200 hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            Algorithm repo
          </Link>
          <Link
            href="https://github.com/rightpossible/document-shock-filter-web"
            className="transition-colors duration-200 hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            Web repo
          </Link>
        </div>
      </div>
    </footer>
  );
}
