import React from 'react';
import Header from './components/Header';
import Personal from './components/Personal';
import NuevaPersona from './components/NuevaPersona';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Router>
      <Provider store={store}>
          <Header />

          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={Personal} />
                  <Route exact path="/personal/nuevo" component={NuevaPersona} />
                  {/* <Route exact path="/productos/editar/:id" component={EditarProducto} /> */}
              </Switch>
          </div>
      </Provider>
    </Router>
    </>
  );
}

export default App;
