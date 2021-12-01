import React from "react";
import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/thumbs/ellisoid_phase.png" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/thumbs/ellisoid_phase.png"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          Current Projec <a href="#">Module</a>
        </span>
        <h3 className="title">Orbital Debris Analysis with Python</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            Initially, this project started from a personal curiosity about how
            orbital debris works, but later was the basis for a senior thesis
            written while attending the Harriet L. Wilkes Honors College.
            The purpose is to develop a modern open-source python implementation
            of the NASA Standard Breakup Model that others can use to research
            orbital debris.
          </p>
          <p>
            Currently, the project is undergoing optimization and modulization
            to convert the existing code into a easily implementable python Module
            called ODAP.
          </p>
          <div className="quotebox">
            <p>
              A Jupyter notebook illustarting the applications for ODAP is available
              to view on <a href="https://nbviewer.org/github/ReeceHumphreys/ODAP/blob/master/Kessler.ipynb"> here</a>. Note that since this project is ongoing
              some functionality may not be working as expected. If any issues
              are encountered please consider opening an issue on ODAPs GitHub
              page <a href="https://github.com/ReeceHumphreys/ODAP"> here </a>
            </p>
          </div>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalOne;
