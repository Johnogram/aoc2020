import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { ReportRepair } from './Components/01-ReportRepair/ReportRepair';

import './App.css';

interface AOCComponent {
  text: string;
  route: string;
  component: JSX.Element;
}

const components: AOCComponent[] = [
  {
    text: "01 - Report Repair",
    route: "/report-repair",
    component: <ReportRepair />
  }
];

function renderNav(): JSX.Element {
  return (
    <nav className="SideNav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {components.map(component => (
          <li key={component.route}>
            <Link to={component.route}>{component.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function renderDefaultRoute(): JSX.Element {
  return (
    <Route path="/">
      <h1>Advent of Code 2020</h1>
      <a href="https://github.com/Johnogram/aoc2020/" target="_blank" rel="noreferrer">https://github.com/Johnogram/aoc2020/</a>
    </Route>
  );
}

function renderSwitch(): JSX.Element {
  return (
    <div className="ComponentBody">
      <Switch>
        {components.map(component => (
          <Route key={component.route} path={component.route}>
            {component.component}
          </Route>
        ))}
        {renderDefaultRoute()}
      </Switch>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <div className="AppBody">
        {renderNav()}
        {renderSwitch()}
      </div>
    </Router>
  );
}

export default App;
