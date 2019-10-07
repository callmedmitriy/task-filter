import React, { useState } from 'react'

import ProjectList from './ProjectList'
import Toolbar from './Toolbar'

function Portfolio() {

  const [filter, setFilter] = useState('All');
  const [filterList, setFilterList] = useState(["All", "Websites", "Flayers", "Business Cards"]);

  return (
    <div className="wrapper">
      <Toolbar 
        filterList={filterList}
        selected={filter}
        onSelectFilter={(filter) => {setFilter(filter);}}/>
      <ProjectList selected={filter}/>
    </div>
  );
}

export default Portfolio;