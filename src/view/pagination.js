import React from "react";
import Data from "../static/data";
import { useParams, Link } from "react-router-dom";
const pages = 5;
function Pagination() {
  let { good, share, ask } = Data;
  let all = [...good, ...share, ...ask];
  let allData = { ...Data, all };

  let { type = "good", page = 1 } = useParams();
  page = Number(page);
  let nowData = allData[type];
  let pageLen = Math.ceil(nowData.length / pages);
  console.log(pageLen);
  function setPage() {
    let pageNum = [];
    for (let i = 1; i <= pageLen; i++) {
      pageNum.push(
        i === page ? (
          <a key={i} className="active">
            {i}
          </a>
        ) : (
          <Link key={i} to={`/${type}/${i}`}>
            {i}
          </Link>
        )
      );
    }
    return pageNum;
  }
  return (
    <div className="pagination">
      {page > 1 ? (
        <Link to={`/${type}/${page - 1}`}>上一页</Link>
      ) : (
        <a>上一页</a>
      )}
      {setPage()}
      {page < pageLen ? (
        <Link to={`/${type}/${page + 1}`}>下一页</Link>
      ) : (
        <a>下一页</a>
      )}
    </div>
  );
}
export default Pagination;
