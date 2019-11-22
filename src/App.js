import React from 'react';
import './App.css';
import Home from './Home/Home'
import {Route, NavLink, Switch} from 'react-router-dom'
import AllRecipes from './Home/Components/AllRecipes/AllRecipes'
import AddRecipe from './Home/Components/AddRecipe/AddRecipe.jsx'
import Search from './Home/Components/Search'



function App() {
  return (
    <div className="App">
      <>
      {/* <Home/> */}
      </>
      <div className="links">
            <nav>
              <label className = "tab">
              <NavLink exact activeClassName ="active" className = "tab" to = '/'>
                HOME
              </NavLink> 
              </label>
              <label className = "tab">
              <NavLink exact activeClassName = "active" className = "tab" to = "/addrecipe">
                ADD RECIPE
              </NavLink>
              </label>
              <label className = "tab">
              <NavLink exact activeClassName = "active" className = "tab"  to = "/allrecipes">
                RECIPES
              </NavLink>
              </label>
                <label className = "tab">
              {/* <NavLink exact activeClassName = "active"  className = "tab" to = "/contactus">
                CONTACT US
              </NavLink> */}
              </label>
            </nav>
          </div>
      <main>
             <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path ='/addrecipe' component = {AddRecipe} />
              <Route exact path = '/allrecipes' component = {AllRecipes} />
            </Switch>
            {/* <Route exact path = '/contactus' component = {Contact}/> */}
          </main>

     
    </div>
  );
}

export default App;
