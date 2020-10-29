import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

import { Switch, Route, Redirect } from "react-router-dom";
import HistoryOne from '../content/history-1'
import HistoryTwo from '../content/history-2'

function App() {
  return (
    <main className="main">
      <Header />
      <Switch>
        <Route path="/history-1" render={() => <HistoryOne/>} exact/>
        <Route path="/history-2" render={() => <HistoryTwo/>} exact/>
        <Redirect to="/history-1" />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
