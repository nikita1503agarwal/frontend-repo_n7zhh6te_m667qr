import Hero from "../components/Hero";
import OpeningBriefing from "../components/OpeningBriefing";
import ThreatBriefing from "../components/ThreatBriefing";
import Architecture from "../components/Architecture";
import OperationalTiers from "../components/OperationalTiers";
import PraetorianGarde from "../components/PraetorianGarde";
import ValueProposition from "../components/ValueProposition";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04060A] text-white">
      <Hero />
      <OpeningBriefing />
      <ThreatBriefing />
      <Architecture />
      <OperationalTiers />
      <PraetorianGarde />
      <ValueProposition />
      <FinalCTA />
    </main>
  );
}
