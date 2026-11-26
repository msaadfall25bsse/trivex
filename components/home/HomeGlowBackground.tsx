'use client';

import GlowCursor from './GlowCursor';

export default function HomeGlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none bg-black"
    >
      <GlowCursor
        color="#0058bc"
        secondaryColor="#06b6d4"
        intensity={1.3}
        trailWidth={3}
        linger={1.2}
        glow={1.2}
        hotspot={0.8}
        followSpeed={0.6}
        clickBurst={true}
        quality="high"
        theme="dark"
        className="w-full h-full"
      />
    </div>
  );
}
