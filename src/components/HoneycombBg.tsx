"use client";

import { useId } from "react";

interface HoneycombBgProps {
  color?: string;
  opacity?: number;
  scale?: number;
  filled?: boolean;
  fillOpacity?: number;
  className?: string;
}

export default function HoneycombBg({
  color = "#C8943E",
  opacity = 0.15,
  scale = 1,
  filled = false,
  fillOpacity = 0.05,
  className = "",
}: HoneycombBgProps) {
  const id = useId();
  const patternId = `honeycomb-${id}`;

  const w = 52;
  const h = 90;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={patternId}
          width={w}
          height={h}
          patternUnits="userSpaceOnUse"
          patternTransform={`scale(${scale})`}
        >
          <polygon
            points="26,0 52,15 52,45 26,60 0,45 0,15"
            fill={filled ? color : "none"}
            fillOpacity={filled ? fillOpacity : 0}
            stroke={color}
            strokeWidth="1.25"
            opacity={opacity}
          />
          <polygon
            points="0,45 26,60 26,90 0,105 -26,90 -26,60"
            fill={filled ? color : "none"}
            fillOpacity={filled ? fillOpacity : 0}
            stroke={color}
            strokeWidth="1.25"
            opacity={opacity}
          />
          <polygon
            points="52,45 78,60 78,90 52,105 26,90 26,60"
            fill={filled ? color : "none"}
            fillOpacity={filled ? fillOpacity : 0}
            stroke={color}
            strokeWidth="1.25"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
