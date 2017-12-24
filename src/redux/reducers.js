export const test = (state = {}, action) =>
  (action.type === 'test' ? { ...state, data: action.data } : state)
