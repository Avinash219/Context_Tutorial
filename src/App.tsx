import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';
import { CounterProvider } from './CounterContext';

function App() {
  return (
    <CounterProvider>
    <Header/>
    <Body/>
  </CounterProvider>
  );
}

export default App;
