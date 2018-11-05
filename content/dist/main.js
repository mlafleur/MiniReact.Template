import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
var routes = RoutesModule.routes;
function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    ReactDOM.render(React.createElement("div", null,
        React.createElement(BrowserRouter, { children: routes, basename: baseUrl })), document.getElementById('react-app'));
}
renderApp();
//# sourceMappingURL=main.js.map