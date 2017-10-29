import React from "react";
import ReactDom from "react-dom";
import AppRouter from "./routers/index.js"
import initialState from "./initialData.json";
import storeFactory from "./store";

import {Provider,connect} from "react-redux";
const store = storeFactory(initialState);


ReactDom.render(<Provider store={store}>{AppRouter}</Provider>,document.getElementById("main-container"));
