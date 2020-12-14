import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  render() {
    return(
      <div>{this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)}</div>
    );
  }
};

export default connect((state) => ({todos: state.todos}))(TodosContainer);