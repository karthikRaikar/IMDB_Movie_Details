import React from "react";
import "../App.css";

const MiddleContainer = props => {
  let { mtitle, mposter } = props;
  return (
    <div className="middle-container">
      <div className="top">
        <img
          src={mposter[0]}
          alt={mtitle[0]}
          height="165px"
          width="200px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {mtitle[0]}
        </p>
      </div>
      <div className="top">
        <img
          src={mposter[1]}
          alt={mtitle[1]}
          height="165px"
          width="200px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {mtitle[1]}
        </p>
      </div>
      <div className="top">
        <img
          src={mposter[2]}
          alt={mtitle[2]}
          height="165px"
          width="200px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {mtitle[2]}
        </p>
      </div>
      <div className="top">
        <img
          src={mposter[3]}
          alt={mtitle[3]}
          height="165px"
          width="200px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {mtitle[3]}
        </p>
      </div>
      <div className="top">
        <img
          src={mposter[4]}
          alt={mtitle[4]}
          height="165px"
          width="200px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {mtitle[4]}
        </p>
      </div>
    </div>
  );
};

export default MiddleContainer;
