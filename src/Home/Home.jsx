import React from 'react'
import {Route, NavLink, Switch} from 'react-router-dom'
import AllRecipes from './Components/AllRecipes/AllRecipes'
import AddRecipe from './Components/AddRecipe/AddRecipe'
import Search from './Components/Search'
import Carousel from './Components/Carousel'


const Home = () => {
    return (
        <div className="Home">
         
          <div className = "headContainer"><Carousel className = "carousel"/>
          <header>Good Cooking</header>
          </div>
          <div className = "search-sec"> 
          <Search/>
          </div>
    
          <main>
            {/* <Switch>
              <Route exact path = '/home' component = {Home} />
              <Route exact path ='/addrecipe' component = {AddRecipe} />
              <Route exact path = '/allrecipes' component = {AllRecipes} />
            </Switch> */}
            {/* <Route exact path = '/contactus' component = {Contact}/> */}
          </main>
        </div>
      )
    }
    
    export default Home

