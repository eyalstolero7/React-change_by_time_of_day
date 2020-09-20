//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const hour = date.getHours();
let greeting = "";
let color = "black";
if (hour >= 0 && hour < 12) {
    greeting = "Good morning";
    color = "red";
} else if (hour >= 12 && hour < 6) {
    greeting = "Good afternoon";
    color = "green";
} else {
    greeting = "Good evening";
    color = "blue";
}

const colorStyle = {
    color: color
};

ReactDom.render(
    <h1 className="heading" style={colorStyle}>
        {greeting}
    </h1>,
    document.getElementById("root")
);
