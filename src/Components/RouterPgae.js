import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from "./LoginPage";
import FolderPage from "./FolderPage";

export default function RouterPgae() {
  return (
    <Router>
        <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/Folder" component={FolderPage} />
         
        </Switch>
    </Router>
  );
}