import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//import * as ReactBootstrap from 'react-bootstrap';
import { NavbarInstance } from './components/NavbarInstance';

import { AddNews } from './components/news/AddNews';
import { NewsList } from './components/news/NewsList';

import { ComplaintFormInstance } from './components/complaint/ComplaintForm';
import { ComplaintList } from './components/complaint/ComplaintList';

import { Login } from './components/account/Login';
import { CreatingAccount } from './components/account/CreatingAccount';
import { EditingAccount } from './components/account/EditingAccount';

import { AddLocationForm } from './components/location/AddLocationForm';
import { DeleteLocationForm } from './components/location/DeleteLocationForm';

import { AddingWord } from './components/forbiddenWords/AddingWord';
import { WordsList } from './components/forbiddenWords/WordsList';

import { AddPoll } from './components/poll/AddPoll';
import { ActivePolls } from './components/poll/ActivePolls';
import { PollQuestions } from './components/poll/PollQuestions';
import { AnswerPoll } from './components/poll/AnswerPoll';

import { AddContactInformation } from './components/contactInformation/AddContactInformation';
import { ViewContactInformation } from './components/contactInformation/ViewContactInformation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        isAuthenticated: false,
        username: "",
        role: ""
      }
    };
    this.updateAuth = this.updateAuth.bind(this);
  }

  updateAuth(authParam) {
    this.setState(this.state);
    // this.setState(
    //   auth: {
    //     isAuthenticated: authParam.isAuthenticated,
    //     username: authParam.username,
    //     role: authParam.role
    //   }
    // );
  }


  render() {

    return (
      <div>
        <Router>
          <div>
            <NavbarInstance />

            <Route exact path="/" component={NewsList} />

            <Route path="/login" component={() => (<Login onLoginCheck={this.updateAuth} />)} />
            <Route path="/signup" component={CreatingAccount} />
            <Route path="/account/edit" component={EditingAccount} />

            <Route path="/news/add" component={AddNews} />
            <Route path="/location/add" component={AddLocationForm} />
            <Route path="/complaint" component={ComplaintFormInstance} />
            <Route path="/location/delete" component={DeleteLocationForm} />
            <Route path="/forbiddenwords/add" component={AddingWord} />
            <Route path="/forbiddenwordsList" component={WordsList} />
            <Route path="/complaintList" component={ComplaintList} />

            <Route path="/poll/create" component={AddPoll} />
            <Route path="/poll/activePolls" component={ActivePolls} />
            <Route path="/poll/questions/:id" component={PollQuestions} />
            <Route path="/poll/answer/:id" component={AnswerPoll} />

            <Route path="/contact/add" component={AddContactInformation} />
            <Route path="/contact/view" component={ViewContactInformation} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
