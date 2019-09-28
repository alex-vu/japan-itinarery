import React from "react";
import { MdAccessTime } from "react-icons/md";
import "./Card.scss";

const Card = ({ time, timeperiod, location, timesuggest, text }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-header">
          <h3 className="card-title dark2-text">
            <span className="card-time">
              {time} {timeperiod}
            </span>{" "}
            <span className="card-location">{location}</span>
          </h3>

          {timesuggest ? (
            <p className="card-duration d-flex align-center">
              <MdAccessTime />
              <span className="card-suggestion">{timesuggest}</span>
            </p>
          ) : null}
        </div>
        <div className="card-body">{text}</div>
      </div>
    </div>
  );
};

export default Card;
