import React, { useState } from "react";
import Filter from "./Filter";
import ProjectsContainer from "./ProjectsContainer";

const FilterContainer = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div>
      <div className="flex sm:mx-20 mx-5">
        <div className="ml-auto flex space-x-2">
          <Filter
            id="filter1"
            label="ux/ui"
            onFilterClick={handleFilterClick}
            activeFilter={activeFilter}
          />
          <Filter
            id="filter2"
            label="web"
            onFilterClick={handleFilterClick}
            activeFilter={activeFilter}
          />
          <Filter
            id="filter3"
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
