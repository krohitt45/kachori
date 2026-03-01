import PageShell from "@/components/PageShell";
import { Building2, FileText, TrendingUp, Check } from "lucide-react";

const pillars = [
  { icon: <Building2 size={22} />, label: "Compact Setup", detail: "Low-cost, modular units" },
  { icon: <FileText size={22} />, label: "Standardized SOP", detail: "Replicable operations" },
  { icon: <TrendingUp size={22} />, label: "High Turnover Model", detail: "Fast-moving, lean stock" },
];

const Scale = () => (
  <PageShell title="Scale">
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-lg text-foreground">Built to Expand</h2>
        <h3 className="font-display text-xl text-gold mb-2">Replicable Model</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our system is standardized and designed to be replicated across campuses.
          Simple food in Structured operations. Controlled menu.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {pillars.map((p) => (
          <div key={p.label} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
            <div className="text-gold">{p.icon}</div>
            <span className="text-xs text-foreground font-medium">{p.label}</span>
            <span className="text-[10px] text-muted-foreground">{p.detail}</span>
          </div>
        ))}
      </div>

      <div className="card-rustic rounded-xl p-4">
        <h3 className="font-display text-base text-foreground text-center mb-2">Expansion Strategy</h3>
        <p className="text-xs text-muted-foreground text-center mb-3">
          Pilot → Optimize → Replicate
        </p>
        <p className="text-[10px] text-muted-foreground text-center">
          City-wide only after campus saturation.
        </p>
      </div>

      <div className="card-rustic rounded-xl p-4">
        <h3 className="font-display text-base text-gold text-center mb-3">Franchise Ready</h3>
        <div className="space-y-2">
          {[
            "Structured brand guidelines",
            "Centralized training",
            "Quality control audits",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={14} className="text-gold shrink-0" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-display text-base text-foreground">
        From One Campus to <span className="text-gold">Many.</span>
      </p>
    </section>
  </PageShell>
);

export default Scale;
