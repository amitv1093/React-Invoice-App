import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadHomePage from './components/LoadHomePage'; 
import LoadCreateInvoice from './components/LoadCreateInvoice'; 
import LoadUpdateInvoice from './components/LoadUpdateInvoice'; 
import LoadDisplayInvoice from './components/LoadDisplayInvoice'; 
import LoadAllInovices from './components/LoadAllInvoices';
import LoadPageNotFound from './components/LoadPageNotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoadHomePage></LoadHomePage>
          </Route>

          <Route exact path="/createinvoice">
            <LoadCreateInvoice></LoadCreateInvoice>
          </Route>

          <Route exact path="/updateinvoice">
            <LoadUpdateInvoice></LoadUpdateInvoice>
          </Route>

          <Route exact path="/displayinvoice">
            <LoadDisplayInvoice></LoadDisplayInvoice>
          </Route>

          <Route exact path="/allinvoices">
            <LoadAllInovices></LoadAllInovices>
          </Route>

          {/* <Route exact path>
            <LoadPageNotFound />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
