import React from 'react';
import './list.scss';

const List = ({ children, ...props }) => {
  return (
    <ul className="list" {...props}>
      {children}
    </ul>
  );
};

export default List;
