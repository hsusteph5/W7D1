import merge from 'lodash/merge';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soda',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with peanut butter',
    done: true
  }
};


const todosReducer = (state = initialState, action) => {
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(el => {
        newState[el.id] = el;
      });
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};


export default todosReducer;
window.reducer = todosReducer;
