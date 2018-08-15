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
    const initialState=this.props.category || this.defaultState;
    this.state = {...initialState};
  }
  
  onSubmit = event => {
    event.preventDefault();
    this.props.onComplete({ ...this.state, id: uuid(),});
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
  onComplete: category => dispatch(categoryCreate(category))
});

export default connect(null, mapDispatchToProps)(CategoryCreateForm);
