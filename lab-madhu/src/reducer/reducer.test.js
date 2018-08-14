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
    const updatedState = reducer([{categoryName:'Games',
    budget: '$100',id:123456},{categoryName:'cleaning',
    budget: '$300',id:789}], actions.categoryUpdate({id:789}));
    expect(updatedState[0].budget).toBe('$100');
  });
  it('should delete a category', () => {
    const State = reducer([{categoryName:'Games',
    budget: '$100',id:123456}], actions.categoryDelete({}));
    expect(State[0].budget).toBe('$100');
  });
});