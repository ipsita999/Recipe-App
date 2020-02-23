import React from "react"
import Axios from "axios"

// const APP_ID = process.env.REACT_APP_ID
// const APP_KEY = process.env.REACT_APP_KEY

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searched: [],
            inputValue: ''

        }
    }

    handleInput = (event) => {
        const inputValue = event.target.value
        this.setState({
            inputValue: inputValue
        })
        console.log(this.state.inputValue)
    }



    fetchSearch = async (e) => {
        console.log("hi")
        e.preventDefault()
        try {
            const response = await Axios.get(`https://api.edamam.com/search?q=${this.state.inputValue}&app_id=6378422b&app_key=e0256fae290542e07cb665da68dc4d56`)
            this.setState({ searched: response.data })
            console.log(response)
        } catch (error) {
            console.log('Error: ', error)
        }



    }


    render() {

        console.log(this.state.searched.hits && this.state.searched.hits[0].recipe.calories)

        const SEARCH = this.state.searched.hits && this.state.searched.hits.map((hit, index) =>
            (<div className="searchContainer">

                <a href={hit.recipe.url}>  <img src={hit.recipe.image} className="foodpic" />   </a>
                <h2>{hit.recipe.label}</h2>

                <p> Calories: {hit.recipe.calories}</p>


            </div>
            ))


        return (
            <>
                <form onSubmit={this.fetchSearch} className="searchForm">
                    <input className="searchBtn" type="text" placeholder="Search by ingredient..." value={this.state.inputValue} autoComplete="off" name="inputValue" onChange={this.handleInput} />
                    <input className="submitBtn" type="submit" value="search" />
                </form>
                <div className="searchRes"> {SEARCH}</div>
            </>
        )

    }
}


export default Search 