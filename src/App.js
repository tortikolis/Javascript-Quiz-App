import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Quiz from './components/qiuz/quiz';
import Admin from './components/admin/Admin';



class App extends Component {
  render() {
    return ( 
      <div className="App container">
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/' component={Quiz}/>
          
        </Switch>

      </div>
    );
  }
}

export default App;
