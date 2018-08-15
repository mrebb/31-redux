import uuid from 'uuid/v4'

export const createCategory = category => {
  category.id = uuid()
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  }
}

export const updateCategory = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
})

export const deleteCategory = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
})

export const categoryReset = () => ({ type: 'CATEGORY_RESET' })