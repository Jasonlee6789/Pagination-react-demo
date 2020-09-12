import React from "react";
import Data from "../static/data";
import { useParams } from "react-router-dom";
const pages = 5;
function IndexList() {
  let { good, share, ask } = Data;
  let all = [...good, ...share, ...ask];
  let allData = { ...Data, all };

  let { type = "good", page = 1 } = useParams();
  let nowData = allData[type];
  let start = (page - 1) * pages;
  let end = start + pages;
  nowData = nowData.filter((item, index) => {
    return index >= start && index < end;
  });
  console.log(nowData);
  return (
    <ul className="list">
      {nowData.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default IndexList;
