import React from "react"
import RecipeForm from "./RecipeForm";
import { api } from '../ApiConfig'



class AddRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            image: "",
            calories: "",
            description: "",
            ingredients: "",
            directions: "",
            vegan: false,
            vegetarian: false,
            nonvegetarian: false,
            keto: false,
            errorMsg: ""

        }
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?

            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })

    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, image, calories, description, ingredients, directions, vegan, vegetarian, nonvegetarian, keto, url } = this.state
        console.log(title)
        const data = {
            title,
            image,
            calories,
            description,
            ingredients,
            directions,
            vegan,
            vegetarian,
            nonvegetarian,
            keto,
            url
        }
        console.log(data)
        api
            .post('/Recipes', data)
            .then(res => res.status === 201 ? this.props.history.push('/allrecipes') : null)
            .catch((e) => this.setState({ errorMsg: e.message }))

    }



    render() {

        return (

            <div class="formContainer">
                <h1> ADD A RECIPE!</h1>
                <RecipeForm

                    title={this.state.title}
                    image={this.state.image}
                    calories={this.state.calories}
                    description={this.state.description}
                    ingredients={this.state.ingredients}
                    directions={this.state.directions}
                    vegan={this.state.vegan}
                    vegetarian={this.state.vegetarian}
                    nonvegetarian={this.state.nonvegetarian}
                    keto={this.state.keto}
                    url={this.state.url}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.errorMsg ? (
                    <p className="error-text">{this.state.errorMsg}</p>
                ) : null}
            </div>
        )
    }
}

export default AddRecipe