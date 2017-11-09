// @flow

import React from 'react';
import { connect } from 'react-redux'
import type { Todo } from './store/types';
import Username from './Username';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos, //getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch({
        type: 'TOGGLE_TODO',
        payload: {id}
      });
    }
  }
}

type Props = {
  todos: Array<Todo>,
  shouldComponentUpdate: boolean,
  onTodoClick: (id: number) => void,
};

class TodoList extends React.Component<Props> {
  shouldComponentUpdate(nextProps) {
    console.log('TodoList.shouldComponentUpdate', nextProps.shouldComponentUpdate);
    return nextProps.shouldComponentUpdate;
  }

  render() {
    console.log(this.props);
    return <ul>
      <li><Username /></li>
      {this.props.todos.map(todo =>
        <li
          onClick={this.props.onTodoClick}
          key={todo.id}
        >
          <input type="checkbox" value={todo.completed} />
          {todo.id} {todo.text}
        </li>
      )}
    </ul>
  }
}

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ConnectedTodoList;
