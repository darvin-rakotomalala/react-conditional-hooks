import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/pages/Home";

import ConditionalHooks1 from "./components/ConditionalHooks1";
import ConditionalHooks2 from "./components/ConditionalHooks2";

import Footer from "./components/pages/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exampleConditionalHooks-1">
                  1. Conditional Hooks in React
                </Link>
              </li>
              <li>
                <Link to="/exampleConditionalHooks-2">
                  2. Conditional Hooks in React
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route
              path="/exampleConditionalHooks-1"
              component={ConditionalHooks1}
            />
            <Route
              path="/exampleConditionalHooks-2"
              component={ConditionalHooks2}
            />

            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
