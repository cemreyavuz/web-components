import * as React from 'react';

export default ({title, children}) => {
  return (
    <div className="container">
      <div className="card app-container">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          {children}
        </div>
      </div>
    </div>
  );
}