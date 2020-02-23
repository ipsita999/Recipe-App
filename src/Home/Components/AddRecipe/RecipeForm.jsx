import React from "react"

const RecipeForm = (props) => {
  
    return (
    <main>
        <form  onSubmit = {props.handleSubmit} className = "form">
            <div className = "input">
            <input className = "bar"
            type = "text"
            name = "title"
            value = {props.title}
            placeholder = "Recipe Name"
            onChange = {props.handleChange}/>
            </div>
            <br />
            <div className = "input">
            <input className = "bar"
            type = "text"
            name = "image"
            value = {props.image}
            placeholder = "Image url"
            onChange = {props.handleChange}/>
            </div>
        
            <br />
            <div className = "input">
            <input className = "bar"
            type = "number"
            name = "calories"
            value = {props.calories}
            placeholder = "Calories"
            onChange = {props.handleChange}/>
            </div>
            <br />
            <label className = "checkbox">
            <input className = "checkbox"
            type = "checkbox"
            checked = {props.vegan}
            name = "vegan"
            onChange = {props.handleChange}/>
                Vegan
                </label>
            <br />
            <label className = "checkbox">
            <input className = "checkbox"
            type = "checkbox"
            checked = {props.vegetarian}
            name = "vegetarian"
            onChange = {props.handleChange}/>
                Vegetarian
                </label>
            
            <br />
            <label className = "checkbox">
            <input className = "checkbox"
            type = "checkbox"
            checked = {props.nonvegetarian}
            name = "nonvegetarian"
            onChange = {props.handleChange}/>
                Non-Vegetarian
            </label>
         
            <br />
            <label className = "checkbox">
            <input className = "checkbox"
            type = "checkbox"
            checked = {props.keto}
            name = "keto"
            onChange = {props.handleChange}/>
            Keto
            </label>
       
            <br />
             <div className = "input">
            <input className = "bar"
            type = "text"
            name = "description"
            value = {props.description}
            placeholder = "description"
            onChange = {props.handleChange}/>
         </div>
            <br />
            <div className = "input">
            <input className = "bar"
            type = "text"
            name = "directions"
            value = {props.directions}
            placeholder = "directions"
            onChange = {props.handleChange}/>
            </div>
       
            <br />
            <div className = "input">
            <input className = "bar"
            type = "text"
            name = "ingredients"
            value = {props.ingredients}
            placeholder = "ingredients"
            onChange = {props.handleChange}/>
        </div>
        <br />
            <div className = "input">
            <input className = "bar"
            type = "text"
            name = "url"
            value = {props.url}
            placeholder = "recipe URL"
            onChange = {props.handleChange}/>
        </div>
            <br />
            <input  className = "formBtn" type ="submit" value = "Submit" autoComplete = "off"/>
        </form>
          
        </main>
     
    )
}
export default RecipeForm