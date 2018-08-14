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
        <input name="title" placeholder="title" defaultValue={this.state.title} />
        <textarea
          name="content"
          placeholder="content"
          defaultValue={this.state.content}
        />
        <label>
          <span>editing</span>
          <input name="editing" type="checkbox" defaultChecked={this.state.editing} />
        </label>
        <label>
          <span>completed</span>
          <input
            name="completed"
            type="checkbox"
            defaultChecked={this.state.completed}
          />
        </label>
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
