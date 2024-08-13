import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("div",{id:"parent"}, 
    [React.createElement("div",{id:"child"},//child siblings are put into array
    [React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h2 tag")] //child's sibling child
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"this is h1 tag"),React.createElement("h2",{},"this is h2 tag")] //child's sibling child
    )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);