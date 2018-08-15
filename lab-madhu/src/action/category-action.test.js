import * as actions from './category-action';

describe('actions', () => {
  it('should create an action to add a category', () => {

    const category = {
      categoryName:'grocery',
      budget:'200',
    };
    const actualAction = actions.createCategory({
      categoryName:'grocery',
      budget:'200',
    });
    expect(actualAction.type).toBe('CATEGORY_CREATE');
    expect(actualAction.payload.categoryName).toBe(category.categoryName);
    expect(actualAction.payload.budget).toBe(category.budget);
    expect(actualAction.payload.id).toBeDefined();
  })
  it('should create an action to update a category', () => {

    const category = {
      categoryName:'grocery',
      budget:'200',
      id:1234
    };


    const actualAction = actions.updateCategory({
      categoryName:'grocery',
      budget:'200',
      id:1234
    });


    expect(actualAction.type).toBe('CATEGORY_UPDATE');
    expect(actualAction.payload.categoryName).toBe(category.categoryName);
    expect(actualAction.payload.budget).toBe(category.budget);
    expect(actualAction.payload.id).toBe(category.id);
  })
  it('should create an action to destroy a category', () => {

    const category = {
      categoryName:'grocery',
      budget:'200',
      id:1234
    };
    const actualAction = actions.deleteCategory({
      categoryName:'grocery',
      budget:'200',
      id:1234
    });
    expect(actualAction.type).toBe('CATEGORY_DESTROY');
    expect(actualAction.payload.categoryName).toBe(category.categoryName);
    expect(actualAction.payload.budget).toBe(category.budget);
    expect(actualAction.payload.id).toBe(category.id);
  })
})