import React from 'react';
import Reboot from 'material-ui/Reboot';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Home from './screens/Home';
import './App.css';
import './redux/store';

function App() {
  return (
    <div className="App">
      <Reboot />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hui" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
