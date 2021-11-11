import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect
} from "react-router-dom"; 
import { routes } from '../routes/routes';

// import logo from '../logo.svg';

export const LazyLoadNavigation = () => {
    return (
      <Suspense fallback={ null }>  
        <Router>
          <div className="main-layout">
            <nav>
                {/* <img src={ logo } alt="React logo" /> */}
              <ul>
                {
                  routes.map( ({ path, name }) => (
                    <li key={ path } >
                      <NavLink
                          to={ path }
                          activeClassName="nav-active">
                          { name }
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </nav>
    
            <Switch>
              {
                routes.map( ({ path, Component }) => (
                  <Route
                    key={ path }
                    path={ path }>
                    <Component />
                  </Route>
                ))
              }

              <Redirect to={ routes[0].path } />
            </Switch>
          </div>
        </Router>
      </Suspense>
    );
}