import React, { useState } from "react";
import Filter from "./Filter";

const FilterContainer = () => {
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="flex mx-20">
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
  );
};

export default FilterContainer;
