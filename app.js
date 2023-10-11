import React from "react"
import ReactDOM from "react"
var parent =[React.createElement("h3",{},React.createElement("h1",{},"welcome to react class")),React.createElement("p",{},
"React lets you build user interfaces out of individual pieces called components"),React.createElement("h2",{},"react first assignment")]
var htmlRoot=document.getElementById("root")
var rootReact=ReactDOM.createRoot(htmlRoot)
rootReact.render(parent)