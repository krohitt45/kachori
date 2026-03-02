import PageShell from "@/components/PageShell";
import { Heart, Users, Lightbulb, Award } from "lucide-react";

const values = [
  { icon: <Heart size={22} />, title: "Freshness First", desc: "Every item fried fresh on demand" },
  { icon: <Users size={22} />, title: "Student Focused", desc: "Built by students, for students" },
  { icon: <Lightbulb size={22} />, title: "Innovation", desc: "Systemizing street food" },
  { icon: <Award size={22} />, title: "Quality Assured", desc: "Consistent, standardized operations" },
];

const AboutUs = () => (
  <PageShell title="About Us" previousPath="/scale">
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-display text-2xl text-foreground">Kachori Kothi</h2>
        <p className="text-sm text-gold font-medium">Fresh. Systemized. Student First.</p>
      </div>

      <div className="card-rustic rounded-xl p-4 space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed">
          We started with a simple observation: students on campus deserve better. Better snacks,
          better hygiene, better systems. Not street food chaos—not expensive food courts.
          Something in between.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Kachori Kothi brings reliable, fresh, affordable snacks to campus. Every item
          is prepared using structured SOPs, controlled oil cycles, and 100% stall-based frying.
          No reheating. No compromises.
        </p>
      </div>

      <div>
        <h3 className="font-display text-base text-foreground mb-3 text-center">Our Values</h3>
        <div className="grid grid-cols-2 gap-3">
          {values.map((v) => (
            <div key={v.title} className="card-rustic rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="text-gold">{v.icon}</div>
                <span className="text-xs font-medium text-foreground">{v.title}</span>
              </div>
              <p className="text-[10px] text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card-rustic rounded-xl p-4 space-y-2">
        <h3 className="font-display text-base text-foreground">Why Campus First?</h3>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li>✓ <span className="font-medium">Predictable crowds</span> → reliable operations</li>
          <li>✓ <span className="font-medium">Student budgets</span> → sustainable pricing</li>
          <li>✓ <span className="font-medium">Quick turnover</span> → always fresh</li>
          <li>✓ <span className="font-medium">Loyal customer base</span> → scalable model</li>
        </ul>
      </div>

      <div className="card-rustic rounded-xl p-4 space-y-2">
        <h3 className="font-display text-base text-gold">Our Promise</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every kachori, samosa, and jalebi is made fresh in front of you. Every transaction is transparent.
          Every interaction builds trust. We're not just selling snacks—we're building a brand students can rely on.
        </p>
      </div>

      <div className="text-center text-xs text-muted-foreground">
        <p>Based on campus. Built to scale. Run with purpose.</p>
      </div>
    </section>
  </PageShell>
);

export default AboutUs;
