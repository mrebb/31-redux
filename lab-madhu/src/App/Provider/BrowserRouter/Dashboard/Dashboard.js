import React, { Component, Fragment } from "react";
import CategoryCreateForm from './CategoryForm';
import CategoryList from './CategoryList';

export default class App extends Component {

  render() {
    return (
      
        <Fragment>
          <h1>Categories</h1>
          <CategoryCreateForm buttonText={"create category"} />
          <CategoryList />
        </Fragment>
     
    );
  }
}