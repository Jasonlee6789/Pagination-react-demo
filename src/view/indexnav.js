import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

function IndexNav() {
  let { type } = useParams();
  let { pathname } = useLocation();
  return (
    <nav className="nav">
      <NavLink
        to="/all"
        exact
        activeClassName="active"
        isActive={() => {
          return type === "all" || pathname === "/";
        }}
      >
        全部
      </NavLink>
      <span> </span>
      <NavLink
        to="/good"
        exact
        activeClassName="active"
        isActive={() => {
          return type === "good";
        }}
      >
        精华
      </NavLink>
      <span> </span>
      <NavLink
        to="/share"
        exact
        activeClassName="active"
        isActive={() => {
          return type === "share";
        }}
      >
        分享
      </NavLink>
      <span> </span>
      <NavLink
        to="/ask"
        exact
        activeClassName="active"
        isActive={() => {
          return type === "ask";
        }}
      >
        问答
      </NavLink>
    </nav>
  );
}
export default IndexNav;
