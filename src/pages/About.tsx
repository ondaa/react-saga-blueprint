import React from "react";
import Helmet from "react-helmet";
import { Switch, Route, Link } from "react-router-dom";

const About: React.SFC = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
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
          <Route path="/about/account" render={() => <div>account</div>} />
          <Route path="/about/company" render={() => <div>company</div>} />
        </Switch>
      </div>
    </>
  );
};

export default About;
