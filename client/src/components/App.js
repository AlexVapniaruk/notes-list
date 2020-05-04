import React from 'react';
import NoteList from './Note/NoteList';
import NoteAdd from './Note/NoteAdd';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Route path="/" exact component={NoteList} />
          <Route path="/add" exact component={NoteAdd} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;