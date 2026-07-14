"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useTranslation } from "next-i18next";
import Icon from "@/components/Icon";
import SkillIcon, { hasSkillAssetIcon } from "@/components/SkillIcon";
import { useTheme } from "@/context/ThemeContext";
import { skillsMatrix } from "@/data/skillsMatrix";
import SkillTooltip from "@/components/SkillTooltip";

const PLANET_SPRING = { type: "spring", stiffness: 120, damping: 18, mass: 0.85 };
const MOON_SPRING = { type: "spring", stiffness: 160, damping: 20, mass: 0.75 };
const MAGNET_SPRING = { stiffness: 380, damping: 28, mass: 0.4 };
const SPEED_SPRING = { stiffness: 90, damping: 22, mass: 0.6 };

/** Grados/segundo — una vuelta completa ~28s (lectura cómoda). */
const ORBIT_DEG_PER_SEC = 12.8;
const ORBIT_HOVER_SPEED = 0; // pausa total al inspeccionar pills


const SAFE_PAD = 24;
const PLANET_HALF_W = 64;
const PLANET_HALF_H = 16;
const MOON_HALF_W = 70;
const MOON_HALF_H = 16;
const MAGNET_RADIUS = 48;
const MAGNET_PULL = 8;

function clampBox(cx, cy, halfW, halfH, width, height) {
  const minX = SAFE_PAD;
  const maxX = Math.max(minX, width - SAFE_PAD - halfW * 2);
  const minY = SAFE_PAD;
  const maxY = Math.max(minY, height - SAFE_PAD - halfH * 2);
  return {
    x: Math.min(Math.max(minX, cx - halfW), maxX),
    y: Math.min(Math.max(minY, cy - halfH), maxY),
  };
}

function ringPoint(index, total, cx, cy, rx, ry, halfW, halfH, width, height) {
  const angle = (index / Math.max(total, 1)) * Math.PI * 2 - Math.PI / 2;
  return clampBox(
    cx + Math.cos(angle) * rx,
    cy + Math.sin(angle) * ry,
    halfW,
    halfH,
    width,
    height
  );
}

function moonRadii(width, height, count) {
  const maxRx = width / 2 - SAFE_PAD - MOON_HALF_W - 8;
  const maxRy = height / 2 - SAFE_PAD - MOON_HALF_H - 8;
  const grow = Math.min(1, 0.55 + count * 0.035);
  return {
    rx: Math.max(90, maxRx * grow),
    ry: Math.max(70, maxRy * grow * 0.86),
  };
}

function planetRingRadii(width, height, periphery) {
  const factor = periphery ? 0.92 : 0.7;
  return {
    rx: Math.max(100, (width / 2 - SAFE_PAD - PLANET_HALF_W) * factor),
    ry: Math.max(80, (height / 2 - SAFE_PAD - PLANET_HALF_H) * factor * 0.82),
  };
}

function MoonPill({
  skill,
  index,
  total,
  planetCenter,
  radii,
  size,
  orbitRotation,
  isDarkMode,
  reduceMotion,
  onOrbitHover,
  onTooltipChange,
}) {
  const mute = isDarkMode ? "#C1CCD6" : "#3A3530";
  const accent =
    !isDarkMode && skill.accentLight ? skill.accentLight : skill.accent;

  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const springMagnetX = useSpring(magnetX, MAGNET_SPRING);
  const springMagnetY = useSpring(magnetY, MAGNET_SPRING);
  const pillRef = useRef(null);
  const [lit, setLit] = useState(false);

  const centerRef = useRef(planetCenter);
  const radiiRef = useRef(radii);
  const sizeRef = useRef(size);
  centerRef.current = planetCenter;
  radiiRef.current = radii;
  sizeRef.current = size;

  const baseAngle = (index / Math.max(total, 1)) * Math.PI * 2 - Math.PI / 2;

  const x = useTransform(orbitRotation, (deg) => {
    const currentAngle = baseAngle + (deg * Math.PI) / 180;
    const { x: cx, y: cy } = centerRef.current;
    const { rx, ry } = radiiRef.current;
    const { w, h } = sizeRef.current;
    return clampBox(
      cx + Math.cos(currentAngle) * rx,
      cy + Math.sin(currentAngle) * ry,
      MOON_HALF_W,
      MOON_HALF_H,
      w,
      h
    ).x;
  });

  const y = useTransform(orbitRotation, (deg) => {
    const currentAngle = baseAngle + (deg * Math.PI) / 180;
    const { x: cx, y: cy } = centerRef.current;
    const { rx, ry } = radiiRef.current;
    const { w, h } = sizeRef.current;
    return clampBox(
      cx + Math.cos(currentAngle) * rx,
      cy + Math.sin(currentAngle) * ry,
      MOON_HALF_W,
      MOON_HALF_H,
      w,
      h
    ).y;
  });

  const resetMagnet = useCallback(() => {
    magnetX.set(0);
    magnetY.set(0);
    setLit(false);
  }, [magnetX, magnetY]);

  const onPointerEnter = () => {
    onOrbitHover(true);
    onTooltipChange(skill);
  };

  const onPointerLeave = () => {
    onOrbitHover(false);
    onTooltipChange(null);
    resetMagnet();
  };

  const onPointerMove = (e) => {
    if (reduceMotion || !pillRef.current) return;
    const rect = pillRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < MAGNET_RADIUS && dist > 0.01) {
      const pull = Math.min(MAGNET_PULL, dist * 0.2);
      magnetX.set((dx / dist) * pull);
      magnetY.set((dy / dist) * pull);
      setLit(true);
      return;
    }
    resetMagnet();
  };

  const color = lit ? accent : mute;

  return (
    <motion.div
      className="absolute left-0 top-0 z-20 will-change-transform"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
      transition={MOON_SPRING}
    >
      <motion.div style={{ x: springMagnetX, y: springMagnetY }}>
        <button
          ref={pillRef}
          type="button"
          onPointerEnter={onPointerEnter}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wide ${
            isDarkMode ? "bg-white/[0.06]" : "bg-white/70"
          }`}
          style={{
            color,
            borderColor: lit
              ? isDarkMode
                ? `${accent}99`
                : "rgba(37, 37, 37, 0.45)"
              : isDarkMode
                ? "rgba(193, 204, 214, 0.25)"
                : "rgba(37, 37, 37, 0.22)",
            boxShadow: lit
              ? isDarkMode
                ? `0 0 0 1px ${accent}40, 0 0 16px ${accent}30`
                : "0 0 0 1px rgba(37, 37, 37, 0.2), 0 0 14px rgba(0,0,0,0.06)"
              : isDarkMode
                ? "0 1px 2px rgba(0,0,0,0.2)"
                : "0 1px 2px rgba(0,0,0,0.04)",
            backgroundColor: lit
              ? isDarkMode
                ? `${accent}16`
                : `${accent}12`
              : undefined,
          }}
        >
          {hasSkillAssetIcon(skill.iconKey) ? (
            <SkillIcon iconKey={skill.iconKey} color={color} size={14} />
          ) : skill.iconKey ? (
            <Icon
              iconName={skill.iconKey}
              color={color}
              hoverColor={accent}
              isHovered={lit}
              size={14}
            />
          ) : (
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
              aria-hidden
            />
          )}
          <span className="whitespace-nowrap">{skill.label}</span>
        </button>
      </motion.div>
    </motion.div>
  );
}

function PlanetNode({
  category,
  index,
  total,
  isActive,
  hasFocus,
  size,
  isDarkMode,
  label,
  onSelect,
}) {
  const cx = size.w / 2;
  const cy = size.h / 2;

  const target = useMemo(() => {
    if (isActive) {
      return clampBox(cx, cy, PLANET_HALF_W, PLANET_HALF_H, size.w, size.h);
    }
    const ring = planetRingRadii(size.w, size.h, hasFocus);
    return ringPoint(
      index,
      total,
      cx,
      cy,
      ring.rx,
      ring.ry,
      PLANET_HALF_W,
      PLANET_HALF_H,
      size.w,
      size.h
    );
  }, [cx, cy, hasFocus, index, isActive, size.h, size.w, total]);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(category.id)}
      aria-pressed={isActive}
      className={`absolute left-0 top-0 z-30 will-change-transform rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] sm:text-xs ${
        isActive
          ? isDarkMode
            ? "border-secondaryDark/50 bg-secondaryDark text-primaryDark"
            : "border-secondaryLight/20 bg-[#E8DFD2] text-secondaryLight"
          : isDarkMode
            ? "border-secondaryDark/20 bg-white/[0.04] text-secondaryDark"
            : "border-secondaryLight/15 bg-white/60 text-secondaryLight"
      }`}
      initial={false}
      animate={{
        x: target.x,
        y: target.y,
        opacity: hasFocus && !isActive ? 0.3 : 1,
        scale: isActive ? 1.08 : 1,
        zIndex: isActive ? 40 : 30,
      }}
      transition={PLANET_SPRING}
      whileHover={
        hasFocus && !isActive ? undefined : { scale: isActive ? 1.08 : 1.04 }
      }
    >
      {label}
    </motion.button>
  );
}

const SkillsMatrix = () => {
  const { t, i18n } = useTranslation();
  const { isDarkMode } = useTheme();
  const stageRef = useRef(null);
  const hoverCountRef = useRef(0);

  const [size, setSize] = useState({ w: 900, h: 480 });
  const [activeCat, setActiveCat] = useState(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [tooltipSkill, setTooltipSkill] = useState(null);

  const orbitRotation = useMotionValue(0);
  const orbitSpeed = useMotionValue(1);
  const orbitSpeedSmooth = useSpring(orbitSpeed, SPEED_SPRING);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const moons = useMemo(() => {
    if (!activeCat) return [];
    const cat = skillsMatrix.find((c) => c.id === activeCat);
    return cat?.skills ?? [];
  }, [activeCat]);

  const planetCenter = useMemo(
    () => ({ x: size.w / 2, y: size.h / 2 }),
    [size.h, size.w]
  );

  const radii = useMemo(
    () => moonRadii(size.w, size.h, moons.length || 4),
    [moons.length, size.h, size.w]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    orbitRotation.set(0);
    orbitSpeed.set(1);
    hoverCountRef.current = 0;
    setTooltipSkill(null);
  }, [activeCat, orbitRotation, orbitSpeed]);

  useAnimationFrame((_, delta) => {
    if (reduceMotion || !activeCat) return;
    const factor = orbitSpeedSmooth.get();
    const next =
      (orbitRotation.get() + ORBIT_DEG_PER_SEC * factor * (delta / 1000)) % 360;
    orbitRotation.set(next);
  });

  const handleOrbitHover = useCallback(
    (entering) => {
      hoverCountRef.current = Math.max(
        0,
        hoverCountRef.current + (entering ? 1 : -1)
      );
      orbitSpeed.set(hoverCountRef.current > 0 ? ORBIT_HOVER_SPEED : 1);
    },
    [orbitSpeed]
  );

  const handleStageMouseMove = useCallback(
    (e) => {
      const el = stageRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const handleSelect = (id) => {
    setActiveCat((prev) => (prev === id ? null : id));
  };

  const ringRotate = useTransform(orbitRotation, (deg) => deg);

  return (
    <div className="mx-5 mt-8 sm:mx-20">
      <div
        ref={stageRef}
        onMouseMove={handleStageMouseMove}
        className={`relative z-0 isolate h-[420px] overflow-hidden rounded-3xl border sm:h-[500px] md:h-[560px] ${
          isDarkMode
            ? "border-transparent bg-transparent"
            : "border-none bg-transparent"
        }`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            opacity: activeCat ? 0.45 : 0.12,
            scale: activeCat ? 1 : 0.7,
          }}
          transition={PLANET_SPRING}
          style={{
            background: isDarkMode
              ? "radial-gradient(circle, rgba(193,204,214,0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(232,223,210,0.75) 0%, transparent 70%)",
          }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
          style={{
            width: radii.rx * 2,
            height: radii.ry * 2,
            rotate: ringRotate,
            borderColor: isDarkMode
              ? "rgba(193,204,214,0.35)"
              : "rgba(37,37,37,0.12)",
            opacity: activeCat ? (isDarkMode ? 0.12 : 0.18) : 0,
          }}
        />

        <AnimatePresence mode="sync">
          {moons.map((skill, index) => (
            <MoonPill
              key={`${activeCat}-${skill.id}`}
              skill={skill}
              index={index}
              total={moons.length}
              planetCenter={planetCenter}
              radii={radii}
              size={size}
              orbitRotation={orbitRotation}
              isDarkMode={isDarkMode}
              reduceMotion={reduceMotion}
              onOrbitHover={handleOrbitHover}
              onTooltipChange={setTooltipSkill}
            />
          ))}
        </AnimatePresence>

        {skillsMatrix.map((category, index) => (
          <PlanetNode
            key={category.id}
            category={category}
            index={index}
            total={skillsMatrix.length}
            isActive={activeCat === category.id}
            hasFocus={!!activeCat}
            size={size}
            isDarkMode={isDarkMode}
            label={t(`skillsCategories.${category.id}`)}
            onSelect={handleSelect}
          />
        ))}

        <SkillTooltip
          skill={tooltipSkill}
          visible={!!tooltipSkill}
          mouseX={mouseX}
          mouseY={mouseY}
          lang={i18n.language}
        />
      </div>
    </div>
  );
};

export default SkillsMatrix;
