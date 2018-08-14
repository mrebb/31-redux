import React, { Component, Fragment } from "react";
import CategoryCreateForm from './CategoryCreateForm';
import CategoryList from './CategoryList';

export default class App extends Component {

  render() {
    return (
      
        <Fragment>
          <h1>Categories</h1>
          <CategoryCreateForm />
          <CategoryList />
        </Fragment>
     
    );
  }
}