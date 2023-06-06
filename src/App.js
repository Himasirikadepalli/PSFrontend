import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ResultPage from './components/ResultPage';
import LoginForm from './components/LoginForm';
import ProjectForm from './components/ProjectForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Project Showcase</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/results">Results</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/registration">Registration</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/projectform">Project Form</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registrationform">Registration Form</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Switch>
          <Route exact path="/">
            <SearchPage onSearch={handleSearch} />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/results">
            <ResultPage searchQuery={searchQuery} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/registration">
            <RegistrationForm />
          </Route>
          <Route path="/projectform">
            <ProjectForm />
          </Route>
          <Route path="/registrationform">
            <RegistrationForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
