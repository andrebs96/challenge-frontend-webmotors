
import React from 'react'
import Header from './components/main/Header'
import Search from './components/main/Search'
import './css/App.css'


function App() {
  return (
    <>
      <Header />

      <div className="content">
        <Search />        
      </div>      

    </>
  );
}

export default App
