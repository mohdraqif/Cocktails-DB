import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import SingleCocktail from './pages/SingleCocktail'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/about' Component={About}></Route>
        <Route exact path='/cocktail/:id' Component={SingleCocktail}></Route>
        <Route component={Error}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
