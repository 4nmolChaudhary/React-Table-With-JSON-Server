import React from 'react';
import './App.css';
import './components/Components.css'
import { Provider } from 'react-redux';
import store from './redux/store'
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import TableData from './components/TableData';
import BottomBar from './components/BottomBar';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="main">
          <LeftBar />
          <div className='content'>
            <Header />
            <TableData />
            <BottomBar />
            <SearchBar />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
