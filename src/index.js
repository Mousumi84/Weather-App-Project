import React from 'react';
import ReactDOM from 'react-dom/client';
import Weatherapp from "./weather.js";
import { useState } from 'react';
import "./index.css";

let root=ReactDOM.createRoot(document.getElementById("root"));


root.render(

    <Weatherapp />
)