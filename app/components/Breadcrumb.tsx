import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <style>{`
        .breadcrumb {
          background: var(--bg-warm);
          border-bottom: 1px solid var(--line);
        }
        .breadcrumb-inner {
          max-width: var(--shell);
          margin: 0 auto;
          padding: 13px var(--pad);
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          font-size: 0.74rem;
          letter-spacing: 0.04em;
        }
        .breadcrumb-inner a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 4px 8px;
          border-radius: var(--r-xs);
          color: var(--brand-700);
          font-weight: 600;
          transition: background-color var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
        }
        .breadcrumb-inner a:hover { background: var(--gold-pale); color: var(--brand-800); }
        .breadcrumb-inner span.current { color: var(--muted); padding: 4px 8px; }
        .breadcrumb-inner svg.sep { color: var(--line-2); flex-shrink: 0; }
      `}</style>
      <div className="breadcrumb-inner">
        <a href="/">
          <Home size={13} /> Home
        </a>
        {items.map((item, index) => (
          <span key={index} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <ChevronRight size={14} className="sep" />
            {item.href ? <a href={item.href}>{item.label}</a> : <span className="current">{item.label}</span>}
          </span>
        ))}
      </div>
    </nav>
  );
}
