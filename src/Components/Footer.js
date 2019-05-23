import React from "react";
import "./footer.css";

class footer extends React.Component {
  render() {
    return (
      <div className="footerWrapper">
        <div className="topFooterContainer">
          <i className="far fa-calendar-times fa-2x" />
          <p className="footerP">
            Corporate
            <br /> Event Planner
          </p>
        </div>
        <div className="bottomFooterContainer">
          <div>
            <i className="fab fa-instagram fa-2x" />
            <i className="fab fa-twitter fa-2x" />
            <i className="fab fa-facebook-square fa-2x" />
          </div>
          <p className="copyRight"> © 2019 Corporate Event Planner</p>
        </div>
      </div>
    );
  }
}

export default footer;
