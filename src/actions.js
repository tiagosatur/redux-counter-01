export const decrement = (value = 0) => dispatch => dispatch({
    type: 'DECREMENT',
    value
  })

export const increment = (value = 0) => dispatch => dispatch({
    type: 'INCREMENT',
    value
  })
