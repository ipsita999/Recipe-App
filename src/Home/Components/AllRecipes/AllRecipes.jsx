import React from "react"
import { api } from "../ApiConfig"
import './AllRecipes.css'
// import AddRecipe from "../AddRecipe/AddRecipe"


class AllRecipes extends React.Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
        }
    }


    componentDidMount() {
        this.fetchRecipes()
    }



    fetchRecipes = async () => {
        try {
            const resp = await api.get('/Recipes')
            // console.log(resp.data[0].recipes)
            this.setState({ recipes: resp.data })
        } catch (error) {
            console.error(error)
        }
    }

    // renderFoods() {


    // }


    render() {
        console.log(this.state.recipes)
        let renderFoods = this.state.recipes && this.state.recipes.map((recipe, index) => {
            return (
            
                    <div className="recipeBox" key={index}>
                     <a href = {recipe.url}>  <img src={recipe.image} alt={recipe.title}></img> </a> 
                        {recipe.title}
                        <br />
                        Calories: {recipe.calories}
                        <br />
                        {recipe.description}
                   
                   
                   
                   
                    </div>



            )
        })
        // let filterFoods = this.state.recipes && this.state.recipes.filter((recipe, index) => {
        //     return(
        //         return(<div key={index}>{recipe[0].calories<400}</div>) 

        // })


        return (

            <>

                <h3> All THE GOOD STUFF </h3>
                <div className = "recPageContainer">
                {renderFoods}
                </div>

            </>
        )
    }
}

export default AllRecipes