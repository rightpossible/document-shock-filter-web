"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getApiUrl } from "@/lib/api";

export default function AboutPage() {
  const api = getApiUrl();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
          Project
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-tight text-ink sm:text-5xl">
          About
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
          <p>
            <span className="text-ink">Onoja Possible</span> · Matric{" "}
            <span className="text-ink">20/30GR058</span>
          </p>
          <p>
            Department of Computer Engineering, University of Ilorin. Final Year
            Project:{" "}
            <em className="text-ink">
              Development of a Shock Filtering-Based Restoration Model for
              Degraded Document Images
            </em>
            .
          </p>
          <p>
            This site is a public research demo. Do not upload sensitive personal
            documents. The algorithm package and API live in a separate
            repository; APSO tuning is offline and not run per request.
          </p>
        </div>

        <ul className="mt-10 space-y-3 text-sm">
          <li>
            <Link
              className="text-accent transition-opacity duration-200 hover:opacity-80"
              href="https://github.com/rightpossible/document-shock-filter"
              target="_blank"
              rel="noreferrer"
            >
              github.com/rightpossible/document-shock-filter
            </Link>
          </li>
          <li>
            <Link
              className="text-accent transition-opacity duration-200 hover:opacity-80"
              href="https://github.com/rightpossible/document-shock-filter-web"
              target="_blank"
              rel="noreferrer"
            >
              github.com/rightpossible/document-shock-filter-web
            </Link>
          </li>
          <li>
            <Link
              className="text-accent transition-opacity duration-200 hover:opacity-80"
              href={`${api}/health`}
              target="_blank"
              rel="noreferrer"
            >
              API health · {api}
            </Link>
          </li>
          <li>
            <Link
              className="text-accent transition-opacity duration-200 hover:opacity-80"
              href={`${api}/docs`}
              target="_blank"
              rel="noreferrer"
            >
              OpenAPI docs
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
