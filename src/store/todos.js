// @flow

import type { Todo } from './types';

type Action<T, P> = { type: T, payload: P };
type AddTodoAction = Action<
  'ADD_TODO',
  { id: number, text: string }
>;

type ToggleTodoAction = Action<
  'TOGGLE_TODO',
  { id: number }
>;

type NotOurAction = Action<string, any>;

type Actions =
  | AddTodoAction
  | ToggleTodoAction
  | NotOurAction;

type State = Array<Todo>;

const todos = (state: State = [], action: Actions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.payload.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state;
  }
}

export default todos;
