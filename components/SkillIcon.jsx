"use client";

import { skillAssetIcons } from "@/assets";

/**
 * Icono de skill via SVGR (React + currentColor).
 * Se tiñe con accent/mute igual que Icon.jsx.
 */
const SkillIcon = ({ iconKey, color, size = 14 }) => {
  const IconComponent = skillAssetIcons[iconKey];
  if (!IconComponent) return null;

  return (
    <IconComponent
      width={size}
      height={size}
      style={{ color }}
      aria-hidden
      focusable="false"
    />
  );
};

export function hasSkillAssetIcon(iconKey) {
  return Boolean(iconKey && skillAssetIcons[iconKey]);
}

export default SkillIcon;
