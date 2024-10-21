import React from 'react';
import "../Css/Homepage.css"

function Home() {
  return (
    <div className="container">
    <div className="frameHome">
      <div className="pict_box"></div>
      <div className="center-content">
          <div className="center-picture"></div>
          <p className="center-text">
            <h1>Dugain Clarence</h1>
            Recherche alternance en developpement Web
          </p>
        </div>
      <div className="pict_box"></div>
    </div>
  </div>
  );
}

export default Home;
