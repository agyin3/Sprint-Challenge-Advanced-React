import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar.js';
import PlayerTable from './components/PlayerTable.js'
import { render } from '@testing-library/react';


it('renders without crashing', () => {
  render(<App />);
});

it('renders without crashing', () => {
  render(<NavBar/>);
});
