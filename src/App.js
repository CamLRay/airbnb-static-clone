import React from 'react';
import './App.css';
import FilterBar from './components/FilterBar';
import Header from './components/Header/Header';
import PropertyList from './components/PropertyList';


function App() {
  return (

    <div>
      <Header />
      <FilterBar />
      <PropertyList />
    </div>
    
  );
}

export default App;
