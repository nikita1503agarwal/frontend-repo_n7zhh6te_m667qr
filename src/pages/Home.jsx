import Hero from "../components/Hero";
import OpeningBriefing from "../components/OpeningBriefing";
import ThreatBriefing from "../components/ThreatBriefing";
import Architecture from "../components/Architecture";
import OperationalTiers from "../components/OperationalTiers";
import PraetorianGarde from "../components/PraetorianGarde";
import ValueProposition from "../components/ValueProposition";
import FinalCTA from "../components/FinalCTA";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import CompliancePanel from "../components/CompliancePanel";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04060A] text-white">
      <Hero />
      <Reveal>
        <OpeningBriefing />
      </Reveal>
      <SectionDivider label="// THREAT THEATER" />
      <Reveal>
        <ThreatBriefing />
      </Reveal>
      <SectionDivider label="// ARCHITECTURE" />
      <Reveal>
        <Architecture />
      </Reveal>
      <CompliancePanel />
      <Reveal>
        <OperationalTiers />
      </Reveal>
      <SectionDivider label="// PRAETORIAN GARDE" />
      <Reveal>
        <PraetorianGarde />
      </Reveal>
      <SectionDivider label="// EU VALUE" />
      <Reveal>
        <ValueProposition />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </main>
  );
}
