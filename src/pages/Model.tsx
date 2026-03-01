import PageShell from "@/components/PageShell";
import { Clock, Flame, Package } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Pre-Book Your Time",
    desc: "Select pickup slot before arrival. Orders are scheduled, not queued.",
    detail: "2:45 PM–3:00 PM",
    icon: <Clock size={20} className="text-gold" />,
  },
  {
    num: 2,
    title: "We Fry Fresh",
    desc: "Started 5–7 minutes before your time. No batch holding. No reheating.",
    icon: <Flame size={20} className="text-gold" />,
  },
  {
    num: 3,
    title: "Pickup & Go",
    desc: "No waiting. No reheating.",
    icon: <Package size={20} className="text-gold" />,
  },
];

const highlights = [
  { icon: <Flame size={18} />, label: "Time-Slot Based Frying" },
  { icon: <Package size={18} />, label: "No Holding System" },
  { icon: <Clock size={18} />, label: "Controlled Oil Cycle" },
];

const Model = () => (
  <PageShell title="Model">
    <section className="space-y-6">
      <h2 className="font-display text-lg text-foreground">How The System Works</h2>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.num} className="card-rustic rounded-xl p-4 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
              {s.num}
            </div>
            <div>
              <h3 className="font-display text-base text-foreground mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
              {s.detail && (
                <p className="text-xs text-gold mt-1 font-medium">{s.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-display text-base text-foreground text-center mb-3">System Highlights</h3>
        <div className="grid grid-cols-3 gap-3">
          {highlights.map((h) => (
            <div key={h.label} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
              <div className="text-gold">{h.icon}</div>
              <span className="text-[10px] text-muted-foreground font-medium">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Not Street Food. Not Delivery Food.{" "}
        <span className="text-foreground font-medium">Structured Campus QSR.</span>
      </p>
    </section>
  </PageShell>
);

export default Model;
