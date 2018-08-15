import React, { Component } from 'react';
import CategoryUpdateForm from './CategoryUpdateForm';
import { connect } from 'react-redux';
import { categoryDelete, categoryUpdate } from '../../../../action/category-action';

class CategoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default',
      timestamp : this.props.category.timestamp
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
          <h2>{this.props.category.categoryName}</h2>
          <p>{this.props.category.budget}</p>
          <p>{this.state.timestamp}</p>
          <button onClick={() => this.props.onRemove(this.props.category)}>x</button>
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
