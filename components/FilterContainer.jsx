import React, { useState } from "react";
import Filter from "./Filter";
import ProjectsContainer from "./ProjectsContainer";

const FilterContainer = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div>
      <div className="flex sm:mx-20 mx-5">
        <div className="ml-auto flex space-x-2">
          <Filter
            id="ux/ui"
            label="ux/ui"
            onFilterClick={handleFilterClick}
            activeFilter={activeFilter}
          />
          <Filter
            id="web"
            label="web"
            onFilterClick={handleFilterClick}
            activeFilter={activeFilter}
          />
          <Filter
            id="all"
            label="all"
            onFilterClick={handleFilterClick}
            activeFilter={activeFilter}
          />
        </div>
      </div>
      <ProjectsContainer activeFilter={activeFilter} />
    </div>
  );
};

export default FilterContainer;
