'use client';

import { useEffect, useState } from 'react';
import GlowCursor from './GlowCursor';

export default function HomeGlowBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      const mobile =
        window.innerWidth < 768 ||
        (window.matchMedia?.('(pointer: coarse)').matches ?? false);
      setIsMobile(mobile);
    };
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none bg-black"
    >
      <GlowCursor
        color="#0058bc"
        secondaryColor="#06b6d4"
        intensity={isMobile ? 1.0 : 1.3}
        trailWidth={3}
        linger={isMobile ? 0.8 : 1.2}
        glow={isMobile ? 0.7 : 1.2}
        hotspot={0.8}
        followSpeed={0.6}
        clickBurst={true}
        quality={isMobile ? 'low' : 'high'}
        maxDevicePixelRatio={isMobile ? 1 : 2}
        theme="dark"
        className="w-full h-full"
      />
    </div>
  );
}
