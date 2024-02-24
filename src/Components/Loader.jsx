import React from 'react';
import './Loader.css'; // Import CSS file for styling

const Loader = () => {
  return (
    <div>
      <div className="loader-container">
        <div className="loader">
          <div className="cube1"></div>
          <div className="cube2"></div>
        </div>
      </div>
      {/* <div className="website-loader"></div> Website loading line */}
    </div>
  );
}

export default Loader;
