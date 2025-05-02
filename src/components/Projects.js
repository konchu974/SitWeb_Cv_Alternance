import React from 'react';
import '../Css/Projects.css'; // Assure-toi d’avoir les styles correspondants

function Projects() {
  return (
    <section id="projects">
      <div className="projcard-container">

        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=1041" alt="Project 1" />
            <div className="projcard-textbox">
              <div className="projcard-title">Card Title</div>
              <div className="projcard-subtitle">This explains the card in more detail</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">HTML</span>
                <span className="projcard-tag">CSS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=1080" alt="Project 2" />
            <div className="projcard-textbox">
              <div className="projcard-title">That's Another Card</div>
              <div className="projcard-subtitle">No explanation needed here</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">PHP</span>
                <span className="projcard-tag">SQL</span>
                <span className="projcard-tag">Database</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=1039" alt="Project 3" />
            <div className="projcard-textbox">
              <div className="projcard-title">And a Third Card</div>
              <div className="projcard-subtitle">You know what this is</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Duis aute irure dolor in reprehenderit in voluptate...
              </div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">Excel</span>
                <span className="projcard-tag">VBA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-customcolor" style={{ '--projcard-color': '#F5AF41' }}>
          <div className="projcard-innerbox">
            <img className="projcard-img" src="https://picsum.photos/800/600?image=943" alt="Project 4" />
            <div className="projcard-textbox">
              <div className="projcard-title">Last Card</div>
              <div className="projcard-subtitle">That's the last one. Have a nice day!</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">iOS</span>
                <span className="projcard-tag">Android</span>
                <span className="projcard-tag">Cordova</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
