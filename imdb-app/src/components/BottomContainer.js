import React from "react";
import "../App.css";

const BottomContainer = props => {
  let { stitle, sposter } = props;
  return (
    <div className="bottom-container">
      <div className="series">
        <img
          src={sposter[0]}
          alt={stitle[0]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[0]}
        </p>
      </div>
      <div className="series">
        <img
          src={sposter[1]}
          alt={stitle[1]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[1]}
        </p>
      </div>
      <div className="series">
        <img
          src={sposter[2]}
          alt={stitle[2]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[2]}
        </p>
      </div>
      <div className="series">
        <img
          src={sposter[3]}
          alt={stitle[3]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[3]}
        </p>
      </div>
      <div className="series">
        <img
          src={sposter[4]}
          alt={stitle[4]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[4]}
        </p>
      </div>
      <div className="series">
        <img
          src={sposter[5]}
          alt={stitle[5]}
          height="120px"
          width="180px"
          style={{ padding: 5, marginLeft: 5 }}
        ></img>
        <p style={{ color: "white", textAlign: "center", marginTop: -5 }}>
          {stitle[5]}
        </p>
      </div>
    </div>
  );
};

// class BtmContainer extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

export default BottomContainer;
