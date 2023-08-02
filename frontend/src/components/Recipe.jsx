import * as React from "react";

import {useParams} from "react-router-dom";

import axios from "axios";

import '../styles/Recipe.css';


function Recipe() {
    const params = useParams();
    let div = document.createElement('div');
    const [recipe, setRecipe] = React.useState({
        isLoaded: false,
        recipe: [],
    });

    React.useEffect(() => {
        getRecipe();
    },[]);

    const getRecipe = () => {
        let data, all_data;
        axios.get('http://localhost:8000/recipes/')
            .then(res => {
                all_data = res.data;
                data = [];
                all_data.map((recipe, id) => {
                    if(recipe.title === params.recipe)
                        data.push(all_data[id]);
                })
                console.log(data);
                setRecipe({
                    isLoaded: true,
                    recipe: data,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return !recipe.isLoaded ? "loading..." :  (
        <div id="recipe">
            <h4>{recipe.recipe[0].title}</h4>
            <img alt={recipe.recipe[0].title} src={recipe.recipe[0].image}/>
            <h5>{recipe.recipe[0].text}</h5>
        </div>
    )
}

export default Recipe;