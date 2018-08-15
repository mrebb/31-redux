import reducer from './reducer';
import * as actions from '../action/category-action';

describe('Category reducer', () => {

  it('should have no categories initially', () => {
    const newState = reducer([], {});
    expect(newState).toEqual([]);
  });

  it('should add a category', () => {
    const newState = reducer([], actions.categoryCreate({
      categoryName:'Games',
      budget: '$100',
    }));

    expect(newState.length).toBe(1);
  });
  it('should update a category', () => {
    const category = {categoryName:'games',budget:10};
    const addAction = actions.categoryCreate(category)
    const state = reducer([],addAction);
   
    expect(state.length).toBe(1)
    state[0].budget = 15;
    const updateAction = actions.categoryUpdate(state[0])
    const updatedState = reducer(state,updateAction)
    expect(updatedState[0].budget).toBe(15)


  });
  it('should delete a category', () => {
    const category1 = {categoryName:'games',budget:10};
    const addAction1 = actions.categoryCreate(category1)
    const state1 = reducer([],addAction1);
    const category2 = {categoryName:'movies',budget:15};
    const addAction2 = actions.categoryCreate(category2)
    const state2 = reducer(state1,addAction2);
    expect(state2.length).toBe(2)
    
    const deleteAction = actions.categoryDelete(state2[0])
    const updatedState = reducer(state2,deleteAction)
    expect(updatedState.length).toBe(1)
  });
});