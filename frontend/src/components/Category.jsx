import * as React from "react";

import {Link, useParams} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function Category() {
    const params = useParams();

    const [recipes, setRecipes] = React.useState({
        isLoaded: false,
        recipes: [],
    });

    React.useEffect(() => {
        getRecipes();
    },[]);

    const getRecipes = () => {
        let data, all_data;
        axios.get('http://localhost:8000/recipes/')
            .then(res => {
                all_data = res.data;
                data = [];
                all_data.map((recipe, id) => (
                    recipe.categories.map((category) => {
                        if(category === params.category)
                            data.push(all_data[id]);
                   })
                ))
                console.log(data);
                setRecipes({
                    isLoaded: true,
                    recipes: data,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return !recipes.isLoaded ? "loading..." : (
        <>
            <h4>Category: {params.category}</h4>
            <Row xs={1} md={3} className="g-4">
                {recipes.recipes.map((output, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={output.image}/>
                            <Card.Body>
                                <Card.Title>{output.title}</Card.Title>
                                <Card.Text>{output.text.slice(0, 50)}...</Card.Text>
                                <Link to={output.title}>
                                    Cook {output.title}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Category;