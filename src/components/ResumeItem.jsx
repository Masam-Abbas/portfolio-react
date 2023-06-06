import React from "react";
import parse from 'html-react-parser'

const ResumeItem = ({title, icon, year, desc}) => {
  return (
    <>
      <div className="resume__item">
        <div className="resume__icon">{icon}</div>

        <span className="resume__date">{year}</span>

        <h3 className="resume__subtitle">{parse(title)}</h3>

        <p className="resume__desc">{desc}</p>
      </div>
    </>
  );
};

export default ResumeItem;
