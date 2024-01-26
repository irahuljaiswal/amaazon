import React from "react"
import MenuIcon from "@mui/icons-material/Menu";

export default function Headert(){
    return (
      <div className="header2--main">
        <MenuIcon className="header2--menu--icon"/>
        <ul className="header2--list">
          <li className="list--content">All</li>
          <li className="list--content">Buy Again</li>
          <li className="list--content">Amazon miniTV</li>
          <li className="list--content">Sell</li>
          <li className="list--content">Amazon Pay</li>
          <li className="list--content rm-7">Gift Cards</li>
          <li className="list--content rm-6">Coupons</li>
          <li className="list--content rm-5">Today's Deals</li>
          <li className="list--content rm-4">Gift Ideas</li>
          <li className="list--content rm-3">Health, Household & Personal Care</li>
          <li className="list--content rm-2">AmazonBasics</li>
          <li className="list--content rm">Browsing History</li>
        </ul>
      </div>
    );
}




