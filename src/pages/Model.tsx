import PageShell from "@/components/PageShell";
import { Clock, Flame, Package, Check, Users, Smartphone, Award } from "lucide-react";

const steps = [
  {
    num: 1,
    title: "Pre-Book Your Time",
    desc: "Select pickup slot before arrival. Orders are scheduled, not queued.",
    icon: <Clock size={22} />,
  },
  {
    num: 2,
    title: "We Fry Fresh",
    desc: "Started 5–7 minutes before your time. No batch holding. No reheating.",
    icon: <Flame size={22} />,
  },
  {
    num: 3,
    title: "Pickup & Go",
    desc: "No waiting. No reheating. Fresh in hand.",
    icon: <Package size={22} />,
  },
];

const highlights = [
  { icon: <Clock size={18} />, label: "Time-Slot Based", detail: "Scheduled pickup" },
  { icon: <Flame size={18} />, label: "No Holding System", detail: "Fresh always" },
  { icon: <Package size={18} />, label: "Controlled Queue", detail: "Zero wait" },
];

const benefits = [
  { icon: <Users size={22} />, title: "For Students", desc: "No waiting, affordable, reliable snacks daily" },
  { icon: <Smartphone size={22} />, title: "Digital-First", desc: "Easy apps, booking, transparent pricing" },
  { icon: <Award size={22} />, title: "Quality Guaranteed", desc: "Fresh-fried, consistent standards always" },
];

const Model = () => (
  <PageShell title="Model" previousPath="/vision">
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-xl text-foreground mb-2">How The System Works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A seamless pre-booking model that eliminates queues and ensures your food is
          fried fresh exactly when you arrive.
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((s) => (
          <div key={s.num} className="card-rustic rounded-xl p-4 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-background font-bold text-sm shrink-0">
              {s.num}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gold">{s.icon}</span>
                <h3 className="font-display text-base text-foreground">{s.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
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
              <span className="text-xs text-foreground font-medium">{h.label}</span>
              <span className="text-[10px] text-muted-foreground">{h.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-rustic rounded-xl p-4 space-y-3">
        <h3 className="font-display text-base text-foreground text-center mb-2">Digital Workflow</h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          {[
            "Online pre-booking with time slots",
            "Automatic order scheduling system",
            "Unique order ID & OTP verification",
            "Smart kitchen dashboard prioritization",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check size={14} className="text-gold shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-base text-foreground text-center mb-3">Why This Works</h3>
        <div className="grid grid-cols-3 gap-3">
          {benefits.map((b) => (
            <div key={b.title} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
              <div className="text-gold">{b.icon}</div>
              <span className="text-xs text-foreground font-medium">{b.title}</span>
              <span className="text-[10px] text-muted-foreground">{b.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-display text-base text-foreground">
        Not Street Food. Not Delivery. <span className="text-gold">Structured Campus QSR.</span>
      </p>
    </section>
  </PageShell>
);

export default Model;
