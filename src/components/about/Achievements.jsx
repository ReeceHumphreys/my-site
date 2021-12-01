import React from "react";

const achievementsContent = [
  { title: "POSITION", subTitle1: "TEAM LEAD OF EXPERIMENTS & TESTING IN FAU AEROSPACE EXPERIMENTAL ASSOCIATION", subTitle2: "" },
  { title: "AWARD", subTitle1: "KENAN SOCIAL ENTREPRENEURSHIP CHALLENGE WINNER ", subTitle2: "" },
  { title: "AWARD", subTitle1: "OUTSTANDING THESIS", subTitle2: "" },
  { title: "POSITION", subTitle1: "FAU SG VICE PRESIDENT PRO TEMPORE", subTitle2: "" },
  { title: "POSITION", subTitle1: "FAU SG SPEAKER OF THE HOUSE", subTitle2: "" },
  { title: "POSITION", subTitle1: "FAU ORIENTATION LEADER", subTitle2: "" },
  { title: "POSITION", subTitle1: "FAU ADMISSIONS AMBASSADOR", subTitle2: "" },
  { title: "AWARD", subTitle1: "OUTSTANDING SENIOR", subTitle2: "" },
  { title: "AWARD", subTitle1: "OWL LEADER SUPERLATIVE IN PROBLEM SOLVING ", subTitle2: "" },
  { title: "AWARD", subTitle1: "JUPITER CAMPUS HOUSE OF REPRESENTATIVES EXCELLENCE AWARD", subTitle2: "" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h5 className="poppins-font position-relative">{val.title}</h5>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
