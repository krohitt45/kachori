import PageShell from "@/components/PageShell";
import kachoriImg from "@/assets/kachori.png";
import samosaImg from "@/assets/samosa.png";
import puriImg from "@/assets/puri.png";

const problems = [
  { icon: kachoriImg, label: "Street Chaos" },
  { icon: samosaImg, label: "Long Queues" },
  { icon: puriImg, label: "Reheated Food" },
];

const Vision = () => (
  <PageShell title="Vision">
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-xl text-foreground mb-2">Why We Exist</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Unorganized campus food options and long queues lead to reheated, unhygienic
          snacks. We bring a better, affordable solution exclusively to students.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {problems.map((p) => (
          <div key={p.label} className="card-rustic rounded-xl p-3 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img src={p.icon} alt={p.label} className="w-full h-full object-cover" />
            </div>
            <span className="text-[11px] text-foreground text-center font-medium">{p.label}</span>
          </div>
        ))}
      </div>

      <div className="text-center space-y-2 py-4">
        <h3 className="font-display text-lg text-foreground">
          Fresh, Systemized.{" "}
          <span className="text-gold">Student First.</span>
        </h3>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• 100% Stall-Based Frying</li>
          <li>• Controlled Oil Cycle</li>
          <li>• Structured Kitchen SOP</li>
        </ul>
      </div>
    </section>
  </PageShell>
);

export default Vision;
