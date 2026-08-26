type WaveformProps = {
  animated?: boolean;
  className?: string;
};

export function Waveform({ animated = false, className = "" }: WaveformProps) {
  return (
    <svg
      className={`developer-waveform ${animated ? "developer-waveform--draw" : ""} ${className}`.trim()}
      viewBox="0 0 640 32"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
    >
      <path
        pathLength={1}
        vectorEffect="nonScalingStroke"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0 16H36C44 16 48 11 54 9C62 6 68 7 74 12C80 17 86 26 96 24C106 22 110 8 120 6C132 3 140 10 148 16C156 22 164 28 176 22C186 17 190 8 200 10C212 13 216 20 228 18C240 16 244 16 256 16H640"
      />
    </svg>
  );
}
