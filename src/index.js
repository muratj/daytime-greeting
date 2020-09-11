import React from "react";
import ReactDOM from "react-dom";

var hour = new Date().getHours();

var greetingStyle = {
  color: ""
};

var dayTime;
if (hour < 12) {
  dayTime = "Morning";
  greetingStyle.color = "green";
} else if (hour < 18) {
  dayTime = "Afternoon";
  greetingStyle.color = "red";
} else {
  dayTime = "Night";
  greetingStyle.color = "blue";
}
console.log(hour);
ReactDOM.render(
  <h1 className="greeting" style={greetingStyle}>
    Good {dayTime}
  </h1>,
  document.getElementById("root")
);
