import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './components/Homepage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Contacts from './components/Contact';
import Form from './components/Form';

function App() {
  return (
    <Router>
    <div className="overflow-hidden">
      <NavigationBar/>
      
      <Switch>  
        <Route exact path="/">
          <Homepage/>
        </Route>

      </Switch>
      
      <Contacts/>

      <Form/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
