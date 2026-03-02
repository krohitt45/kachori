import PageShell from "@/components/PageShell";
import { AlertCircle, Clock, Zap, Check, TrendingUp, MapPin, Zap as ZapIcon } from "lucide-react";

const problems = [
  { icon: <AlertCircle size={22} />, label: "Street Chaos", detail: "Unorganized, unpredictable" },
  { icon: <Clock size={22} />, label: "Long Queues", detail: "Wasted time and frustration" },
  { icon: <Zap size={22} />, label: "Reheated Food", detail: "Old, unhygienic snacks" },
];

const principles = [
  "100% Stall-Based Frying",
  "Controlled Oil Cycle",
  "Structured Kitchen SOP",
];

const impacts = [
  { icon: <MapPin size={22} />, title: "Campus-First Model", desc: "Starting from colleges, scaling across student hubs" },
  { icon: <TrendingUp size={22} />, title: "Predictable Growth", desc: "System designed for replication and franchise expansion" },
  { icon: <ZapIcon size={22} />, title: "Student Impact", desc: "Better food, zero waiting, affordable pricing every day" },
];

const Vision = () => (
  <PageShell title="Vision" previousPath="/">
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-xl text-foreground mb-2">Why We Exist</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Unorganized campus food options and long queues lead to reheated, unhygienic
          snacks. We bring a better, affordable solution exclusively to students.
        </p>
      </div>

      <div>
        <h3 className="font-display text-base text-foreground text-center mb-3">The Problems We Solve</h3>
        <div className="grid grid-cols-3 gap-3">
          {problems.map((p) => (
            <div key={p.label} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
              <div className="text-gold">{p.icon}</div>
              <span className="text-xs text-foreground font-medium">{p.label}</span>
              <span className="text-[10px] text-muted-foreground">{p.detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-rustic rounded-xl p-4 space-y-3">
        <h3 className="font-display text-base text-foreground text-center">Fresh, Systemized. <span className="text-gold">Student First.</span></h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          {principles.map((p) => (
            <li key={p} className="flex items-center gap-2">
              <Check size={14} className="text-gold shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-rustic rounded-xl p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our vision extends beyond a single outlet: by embedding simple digital
          workflows and consistent kitchen procedures, we aim to transform chaotic
          campus snack corners into predictable, trustworthy micro-QSR units that
          students can rely on every day.
        </p>
      </div>

      <div>
        <h3 className="font-display text-base text-foreground text-center mb-3">Long-Term Impact</h3>
        <div className="grid grid-cols-3 gap-3">
          {impacts.map((i) => (
            <div key={i.title} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2 text-center">
              <div className="text-gold">{i.icon}</div>
              <span className="text-xs text-foreground font-medium">{i.title}</span>
              <span className="text-[10px] text-muted-foreground">{i.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center font-display text-base text-foreground">
        Transforming <span className="text-gold">Campus Snacking.</span>
      </p>
    </section>
  </PageShell>
);

export default Vision;
