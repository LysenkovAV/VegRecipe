import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css"

import '../styles/App.css';

import Categories from "./Categories";
import Category from "./Category";
import Recipe from "./Recipe";
import Header from "./Header";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/:category" element={<Category />} />
                <Route path="/:category/:recipe" element={<Recipe />} />
                <Route path="/api" element={<SwaggerUI url="openapi-schema.yml" />}/>
            </Routes>
        </BrowserRouter>
    );
}


export default App;
