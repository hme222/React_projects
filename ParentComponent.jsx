import React from 'react'


const ParentComponent = ({children}) => {
  return (
    <div>
      <h2>Data from Star Wars API</h2>
      <div className="data-container">{children}</div>
    </div>
  );
};

export default ParentComponent;