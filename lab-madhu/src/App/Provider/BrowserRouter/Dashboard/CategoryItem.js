import React, { Component } from 'react';
import CategoryUpdateForm from './CategoryUpdateForm';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../../../action/category-action';

class CategoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }
    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode : 'edit' });
  }

  defaultMode() {
    this.setState({ mode : 'default' })
  }

  render() {
    if(this.props.category){
    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.category.title}</h2>
          <button onClick={() => this.props.onRemove(this.props.category)}>x</button>
          <p>{this.props.category.content}</p>
        </li>
      );
    } else {
      return (
        <CategoryUpdateForm 
          category={this.props.category} 
          onCancel={this.defaultMode} 
          onDone={this.defaultMode}
        />
      );
    }
    }
    else{
        return(
            null
        )
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: category => dispatch(categoryDelete(category)),
  onUpdate: category => dispatch(categoryUpdate(category)),
})

export default connect(null, mapDispatchToProps)(CategoryItem);
