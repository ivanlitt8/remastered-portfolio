"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "next-i18next";
import Card from "./Card";

const HOVER_OPEN_DELAY_MS = 160;

const layoutTransition = {
  type: "spring",
  stiffness: 320,
  damping: 30,
  mass: 0.85,
};

/**
 * Placement explícito para que la card expandida se ancle en su fila
 * y el resto rellene las celdas libres (sin huecos ni saltos).
 */
export function computeServiceLayout(expandedIndex, columns, total) {
  const placements = Array.from({ length: total }, () => null);
  const cols = Math.max(columns, 1);

  if (cols === 1 || expandedIndex == null || expandedIndex < 0) {
    for (let i = 0; i < total; i++) {
      const row = Math.floor(i / cols) + 1;
      const col = (i % cols) + 1;
      placements[i] = {
        gridColumn: `${col} / span 1`,
        gridRow: `${row}`,
      };
    }
    return placements;
  }

  const naturalRow = Math.floor(expandedIndex / cols) + 1;
  const naturalCol = (expandedIndex % cols) + 1;
  const span = Math.min(2, cols);
  const isRightEdge = naturalCol === cols;

  let colStart = isRightEdge ? cols - span + 1 : naturalCol;
  if (colStart + span - 1 > cols) {
    colStart = cols - span + 1;
  }

  placements[expandedIndex] = {
    gridColumn: `${colStart} / span ${span}`,
    gridRow: `${naturalRow}`,
  };

  const occupied = new Set();
  for (let c = colStart; c < colStart + span; c++) {
    occupied.add(`${naturalRow}:${c}`);
  }

  const others = [];
  for (let i = 0; i < total; i++) {
    if (i !== expandedIndex) others.push(i);
  }

  let pointer = 0;
  let row = 1;
  const maxRows = total + 2;

  while (pointer < others.length && row <= maxRows) {
    for (let c = 1; c <= cols; c++) {
      const key = `${row}:${c}`;
      if (occupied.has(key)) continue;
      if (pointer >= others.length) break;

      const index = others[pointer++];
      placements[index] = {
        gridColumn: `${c} / span 1`,
        gridRow: `${row}`,
      };
      occupied.add(key);
    }
    row += 1;
  }

  return placements;
}

function useServiceGridColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqSm = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (mqMd.matches) setColumns(3);
      else if (mqSm.matches) setColumns(2);
      else setColumns(1);
    };

    update();
    mqMd.addEventListener("change", update);
    mqSm.addEventListener("change", update);

    return () => {
      mqMd.removeEventListener("change", update);
      mqSm.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

const CardContainer = () => {
  const { t } = useTranslation();
  const [activeServiceId, setActiveServiceId] = useState(null);
  const [hoveredServiceId, setHoveredServiceId] = useState(null);
  const hoverTimeoutRef = useRef(null);
  const columns = useServiceGridColumns();

  const cardsData = t("flip-cards", { returnObjects: true });
  const cardsArray = Array.isArray(cardsData)
    ? cardsData
    : Object.values(cardsData);

  const expandedId =
    hoveredServiceId !== null ? hoveredServiceId : activeServiceId;

  const expandedIndex = useMemo(() => {
    if (expandedId == null) return null;
    const index = cardsArray.findIndex(
      (card, i) => (card.name ?? String(i)) === expandedId
    );
    return index >= 0 ? index : null;
  }, [cardsArray, expandedId]);

  const placements = useMemo(
    () => computeServiceLayout(expandedIndex, columns, cardsArray.length),
    [expandedIndex, columns, cardsArray.length]
  );

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleSelect = (id) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  const handleHoverStart = (id) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredServiceId(id);
    }, HOVER_OPEN_DELAY_MS);
  };

  const handleHoverEnd = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredServiceId(null);
  };

  return (
    <motion.div
      layout
      transition={layoutTransition}
      className="mx-2 mt-8 grid grid-cols-1 gap-3 sm:mx-20 sm:grid-cols-2 sm:gap-4 md:grid-cols-3"
      style={{ gridAutoFlow: "dense" }}
    >
      {cardsArray.map((card, index) => {
        const id = card.name ?? String(index);

        return (
          <Card
            key={id}
            id={id}
            number={card.number}
            title={card.title}
            name={card.name}
            content={card.text}
            isExpanded={expandedId === id}
            gridStyle={placements[index]}
            onSelect={handleSelect}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          />
        );
      })}
    </motion.div>
  );
};

export default CardContainer;
