import React from "react";
import IndexNav from "./indexnav";
import IndexList from "./indexList";
import Pagination from "./pagination";
function IndexPage(props) {
  console.log(props);
  return (
    <div className="wrap">
      <h1>React-Pagination-Demos</h1>
      <IndexNav />
      <IndexList />
      <Pagination />
    </div>
  );
}
export default IndexPage;
