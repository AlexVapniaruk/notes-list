import React from 'react';
import NoteList from './Note/NoteList';
import NoteAdd from './Note/NoteAdd';
import NoteEdit from './Note/NoteEdit';
import NoteView from './Note/NoteView';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={NoteList} />
          <Route path="/add" exact component={NoteAdd} />
          <Route path="/edit/:id" exact component={NoteEdit} />
          <Route path="/:id" exact component={NoteView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;