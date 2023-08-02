import * as React from "react";

import {Link} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";


function Categories() {
    const [cookbook, setCookbook] = React.useState({
        isLoaded: false,
        categories: [],
    });

    React.useEffect(() => {
        getCategories();
    },[]);

    const getCategories = () => {
        let data;
        axios.get('http://localhost:8000/categories/')
            .then(res => {
                data = res.data;
                console.log(data);
                setCookbook({
                    isLoaded: true,
                    categories: data,
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    return !cookbook.isLoaded ? "loading..." : (
        <>
            <Row xs={1} md={3} className="g-4">
                {cookbook.categories.map((output, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={output.image}/>
                            <Card.Body>
                                <Card.Title>{output.name}</Card.Title>
                                <Card.Text>{output.description}</Card.Text>
                                <Link to={output.name}>
                                    Cook {output.name}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Categories;