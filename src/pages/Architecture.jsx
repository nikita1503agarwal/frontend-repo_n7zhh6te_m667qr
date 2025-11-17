import ArchitectureGrid from "../components/Architecture";
import Reveal from "../components/Reveal";

export default function ArchitecturePage() {
  return (
    <div className="bg-[#06080E] text-gray-100">
      <Reveal>
        <ArchitectureGrid />
      </Reveal>
    </div>
  );
}
