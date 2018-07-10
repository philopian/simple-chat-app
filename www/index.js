import React from "react";
import { render } from "react-dom";
import "font-awesome/css/font-awesome.min.css";

import Root from "./react/Root.jsx";
import "./sass/global.scss";

const node = document.getElementById("react");
render(<Root />, node);
