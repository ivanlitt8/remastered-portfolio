"use client";

import React, { useState } from "react";
import Filter from "./Filter";
import ProjectsContainer from "./ProjectsContainer";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "ux/ui", label: "UI/UX" },
];

const FilterContainer = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="relative z-10 mx-5 mt-6 sm:mx-20">
      <div className="mb-6 flex justify-end sm:mb-8">
        <div className="relative flex items-center gap-0.5">
          {FILTERS.map((filter) => (
            <Filter
              key={filter.id}
              id={filter.id}
              label={filter.label}
              onFilterClick={setActiveFilter}
              activeFilter={activeFilter}
            />
          ))}
        </div>
      </div>
      <ProjectsContainer activeFilter={activeFilter} />
    </div>
  );
};

export default FilterContainer;
