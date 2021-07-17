import React from 'react';

const ListItem = ({ children, label }) => {
  return (
    <li className={`list-item list-item--alt`}>
      {label && <span className="list-item__label">{label}</span>}
      {children}
    </li>
  );
};

export default ListItem;
