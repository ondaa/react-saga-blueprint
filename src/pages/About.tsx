import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const About: React.SFC = () => {
  return (
    <div>
      <h2>About</h2>

      <div>
        <div>Sub Navigator</div>
        <div>
          <Link to="/about/account">account</Link>
          <Link to="/about/company">company</Link>
        </div>
      </div>

      <Switch>
        <Route path="/about/account" render={() => <div>account</div>}></Route>
        <Route path="/about/company" render={() => <div>company</div>}></Route>
      </Switch>
    </div>
  );
};

export default About;
