import React, { Component } from "react";
import uuid from "uuid/v4";
import { connect } from 'react-redux';
import { categoryCreate } from '../../../../action/category-action';

class CategoryCreateForm extends Component {
  
  constructor(props) {
    super(props);
    this.defaultState = {
      budget: "",
      categoryName: "",
      timestamp:'' 
    };
    this.state = {...this.defaultState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.categoryCreate({ ...this.state, id: uuid(), timestamp:new Date()});
    this.setState({ ...this.defaultState });
  };

  onChange = event => {
    const val = event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="categoryName" placeholder="category name" value={this.state.categoryName} />
        <input
          name="budget"
          placeholder="budget"
          value={this.state.budget}
        />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  categoryCreate: category => dispatch(categoryCreate(category))
});

export default connect(null, mapDispatchToProps)(CategoryCreateForm);
