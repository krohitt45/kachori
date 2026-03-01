import PageShell from "@/components/PageShell";
import { GraduationCap, MapPin, Zap, Check } from "lucide-react";

const features = [
  { icon: <GraduationCap size={22} />, label: "Student Pricing", detail: "₹25–₹60 affordable range" },
  { icon: <MapPin size={22} />, label: "Campus Locations", detail: "Near colleges, not city-wide" },
  { icon: <Zap size={22} />, label: "Fast Turnaround", detail: "Pickup in minutes, not hours" },
];

const Campus = () => (
  <PageShell title="Campus">
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-xl text-foreground mb-2">Designed Only for Students</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We operate exclusively near colleges and student hubs. Our model is built around
          student schedules, budgets, and quick campus life.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {features.map((f) => (
          <div key={f.label} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
            <div className="text-gold">{f.icon}</div>
            <span className="text-xs text-foreground font-medium">{f.label}</span>
            <span className="text-[10px] text-muted-foreground">{f.detail}</span>
          </div>
        ))}
      </div>

      <div className="card-rustic rounded-xl p-4">
        <h3 className="font-display text-base text-foreground text-center mb-3">Operational Advantage</h3>
        <div className="space-y-2">
          {["Limited Menu", "High Turnover", "Controlled Crowd"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check size={14} className="text-gold shrink-0" />
              <span className="text-xs text-muted-foreground">{item}</span>
            </div>
          ))}
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            This ensures speed & freshness.
          </p>
        </div>
      </div>

      <p className="text-center font-display text-base text-foreground">
        Built Around <span className="text-gold">Campus Life.</span>
      </p>
    </section>
  </PageShell>
);

export default Campus;
