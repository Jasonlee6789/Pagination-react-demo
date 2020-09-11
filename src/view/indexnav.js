import React from "react";
import { NavLink } from "react-router-dom";
function IndexNav() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">
        全部
      </NavLink>
      <span> </span>
      <NavLink to="/good" exact activeClassName="active">
        精华
      </NavLink>
      <span> </span>
      <NavLink to="/share" exact activeClassName="active">
        分享
      </NavLink>
      <span> </span>
      <NavLink to="/ask" exact activeClassName="active">
        问答
      </NavLink>
    </nav>
  );
}
export default IndexNav;
