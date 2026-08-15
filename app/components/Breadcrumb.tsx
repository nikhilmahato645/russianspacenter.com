import { Home, ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <style>{`
        .breadcrumb {
          background: var(--surface);
          border-bottom: 1px solid var(--line);
        }
        .breadcrumb-inner {
          max-width: var(--shell);
          margin: 0 auto;
          padding: 12px var(--pad);
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          font-size: 0.78rem;
        }
        .breadcrumb-inner a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--r-full);
          color: var(--brand-600);
          font-weight: 500;
          transition: background 0.2s var(--ease), color 0.2s var(--ease);
        }
        .breadcrumb-inner a:hover { background: var(--brand-50); color: var(--brand-700); }
        .breadcrumb-inner span.current { color: var(--muted); padding: 4px 6px; }
        .breadcrumb-inner svg.sep { color: var(--line-strong); flex-shrink: 0; }
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
