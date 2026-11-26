'use client';

import CrystalizedBall from './CrystalizedBall';

export default function HomeCrystalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full overflow-hidden select-none"
      style={{
        background:
          'radial-gradient(circle at 50% 42%, #d8f0ff 0%, #bae2ff 48%, #9cd3ff 100%)',
      }}
    >
      {/* Subtle sky atmosphere luminescence */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(65% 55% at 50% 45%, rgba(255, 255, 255, 0.38) 0%, rgba(224, 244, 255, 0.14) 55%, rgba(135, 206, 250, 0.22) 100%)',
        }}
      />

      {/* Interactive CrystalizedBall centered in viewport */}
      <div
        className="w-full h-full flex items-center justify-center"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            minHeight: '600px',
            position: 'relative',
          }}
        >
          <CrystalizedBall
            preset="aurora"
            theme="light"
            color="#0058bc"
            size={0.71}
            crackle={0.6}
            fill={0.7}
            interactive
            hoverStrength={0.85}
            strands={5}
            flares={0.45}
            glow={0.8}
            sparks={0.45}
            particleCount={23000}
            motion="rise"
            particleShape="square"
            depth={0.6}
            sway={0.55}
            twinkle={0.5}
            haze={1.05}
            dustSpeed={1.8}
            speed={1.5}
            intro
            paused={false}
          />
        </div>
      </div>
    </div>
  );
}
