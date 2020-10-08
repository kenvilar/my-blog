import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage} exact/>
          <Route path="/articles-list" component={ArticlesList} exact/>
          <Route path="/article" component={ArticlePage} exact/>
        </div>
      </div>
    </Router>
  );
}

export default App;
