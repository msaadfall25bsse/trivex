import TeamHero from '@/components/team/TeamHero';
import ThreeFoundersCards from '@/components/team/ThreeFoundersCards';
import FounderAdvantage from '@/components/team/FounderAdvantage';
import CollaborationPhilosophy from '@/components/team/CollaborationPhilosophy';
import TeamCta from '@/components/team/TeamCta';
import FixedBackground from '@/components/layout/FixedBackground';
import MistPageSections from '@/components/layout/MistPageSections';

export const metadata = {
  title: 'Our Executive Leadership | TRIVEX',
  description: 'Meet the founding partners driving engineering, growth, and creative precision at TRIVEX.',
};

export default function OurTeamPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip">
      <FixedBackground />
      <MistPageSections>
        <TeamHero />
        <ThreeFoundersCards />
        <FounderAdvantage />
        <CollaborationPhilosophy />
        <TeamCta />
      </MistPageSections>
    </div>
  );
}
