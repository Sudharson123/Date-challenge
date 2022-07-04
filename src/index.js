import React from "react";
import ReactDom from "react-dom";

import "./styles.css";
const custom = {
  color: "red",
  border: "1px solid black"
};
const day = new Date().getHours();
let period = "";
if (12 - day >= 0) {
  period = "Good Morning";
  custom.color = "green";
} else if (day > 12 && day <= 18) {
  period = "Good Afternoon";
  custom.color = "red";
} else {
  period = "Good Night";
  custom.color = "blue";
}

ReactDom.render(
  <h1 className="heading" style={custom}>
    {period}
  </h1>,
  document.getElementById("root")
);
