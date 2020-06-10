import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";

//fake data
function makeTableData(w: number, h: number) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => {
      return row * 10 + col;
    });
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App data={makeTableData(5, 1000)} rowHeight={60} visibleRows={6} />
  </React.StrictMode>,
  document.getElementById("root")
);
