import React from 'react'

import './Toolbar.scss';

function Toolbar(props) {
  const { filterList, selected } = props;

  const onSelectFilter = filter => {
    props.onSelectFilter(filter);
  }

  return (
    <ul className="list">
    {filterList.map(
      filter => <li onClick={() => onSelectFilter(filter)} key={filter} className={ filter === selected ? 'filter-li selected' : 'filter-li'}>{filter}</li>
    )}
    </ul>
  );
}

export default Toolbar;