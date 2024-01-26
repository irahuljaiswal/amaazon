import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer--main">
      <div className="footer--upper">
        <div className="footer--heading footer--left">
          <h2>Rahul's Ecommerce</h2>
          <p className="footer--heading--desc">
            Buy all your favorite items here and get it delieverd within 2 days
            at your door step
          </p>
        </div>
        <div className="footer--heading">
          <h3 className="footer--list--heading">Quick Links</h3>
          <ul className="footer--list">
            <Link className="custom-link" onClick="k">
              <li className="footer--list--items">Home</li>
            </Link>
            <Link className="custom-link" to='/cart'>
              <li className="footer--list--items">Cart</li>
            </Link>
            <Link className="custom-link" to='/orders'>
              <li className="footer--list--items">Orders</li>
            </Link>
          </ul>
        </div>
        <div className="footer--heading">
          <h3 className="footer--list--heading">Connect with me</h3>
          <ul className="footer--list">
            <Link
              to="https://www.linkedin.com/in/rahul-jaiswal-82027b1b3/"
              target="_blank"
              className="custom-link"
            >
              <li className="footer--list--items">LinkedIn</li>
            </Link>
          </ul>
        </div>
        <div className="footer--heading">
          <h3 className="footer--list--heading">Contact me</h3>
          <ul className="footer--list">
            <li className="footer--list--items">rj82890@gmail.com</li>
            <li className="footer--list--items">+91 1234567890</li>
            <li className="footer--list--items">no-reply@amazon.com</li>
          </ul>
        </div>
      </div>
      <div className="footer--lower">
        <p>Made by Rahul Jaiswal</p>
      </div>
    </div>
  );
}
