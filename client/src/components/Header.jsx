import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{basket}, dispatch] = useStateValue()
  return (
    <div className="header--main">
      <Link to="/">
        <img
          className="header--logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header--search rmv">
        <input
          className="header--search--input"
          placeholder="Search Amazon"
          type="text"
        />
        <SearchIcon className="header--search--icon" />
      </div>

      <div className="header--right">
        <div>
          <Link className="custom-link header--rr" to="/signin">
            <span className="header--rr--one">Hello</span>
            <span className="header--rr--two">Sign in</span>
          </Link>
        </div>

        <div>
          <Link className="custom-link header--rr" to="/orders">
            <span className="header--rr--one">Returns</span>
            <span className="header--rr--two">& Orders</span>
          </Link>
        </div>

        <Link className="custom-link" to='/cart'>
          <div className="header--rr--cart">
            <span className="cart--count">{basket?.length}</span>
            <ShoppingCartOutlinedIcon className="header--cart--icon" />
            <p className="cart--text">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
