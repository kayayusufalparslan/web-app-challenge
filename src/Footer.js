import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>WHAT'S NEXT? </h4>
            <h1 className="list-unstyled">
              <li>555 444 33 22</li>
              <li>Istanbul / Turkey</li>
              <li>123 Kadıköy</li>
            </h1>
          </div>
          <div className="col">
            <h4>SERIES</h4>
            <ui className="list-unstyled">
            <li>TRENDING SERIES</li>
              <li>POPULAR SERIES</li>
              <li>TOP 10</li>
            </ui>
          </div>
          <div className="col">
            <h4>MOVIES</h4>
            <ui className="list-unstyled">
              <li>TRENDING MOVIES</li>
              <li>POPULAR MOVIES</li>
              <li>TOP 10</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WHAT'S NEXT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;