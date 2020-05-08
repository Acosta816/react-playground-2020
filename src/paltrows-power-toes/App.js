import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorkoutsPage from './WorkoutsPage';
import NotFoundPage from './NotFoundPage';
import './App.css'

//make sure the catch-all NotFoundPage component is at the bottom of the list as it won't let any others render below it.

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/workouts" component={WorkoutsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}
