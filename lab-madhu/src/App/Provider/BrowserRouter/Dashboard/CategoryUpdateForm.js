import React, { Component } from "react";
import { connect } from "react-redux";
import { categoryUpdate } from "../../../../action/category-action";

class CategoryUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.category };
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onDone();
    this.props.categoryUpdate(this.state);
  };

  onCancel = () => this.props.onCancel();

  onChange = event => {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <input name="categoryName" placeholder="category name" defaultValue={this.state.categoryName} />
        <input
          name="budget"
          placeholder="budget"
          defaultValue={this.state.budget}
        />
        <button>Update Category</button>
        <button type="button" onClick={this.onCancel}>
          cancel
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  categoryUpdate: category => dispatch(categoryUpdate(category))
});
export default connect(
  null,
  mapDispatchToProps
)(CategoryUpdateForm);
