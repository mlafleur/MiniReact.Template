import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Home } from "./components/Home";
export var routes = (React.createElement(Layout, null,
    React.createElement(Route, { exact: true, path: "/", component: Home })));
//# sourceMappingURL=routes.js.map