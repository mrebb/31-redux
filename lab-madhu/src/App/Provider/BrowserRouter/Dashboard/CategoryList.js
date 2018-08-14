import React from 'react';
import CategoryItem from './CategoryItem';
import { connect } from 'react-redux';
const CategoryList = (props) => {
  return (
    <ul>
      {props.categories.length>0&&props.categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  categories: state,
})


export default connect(mapStateToProps)(CategoryList)

