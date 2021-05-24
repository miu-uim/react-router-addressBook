import React, {useState} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import {addTodo,deleteTodo,doneTodo} from '../actions'
// import {Home} from './childComponent/Home'
// import {About} from './childComponent/About'
// import {List} from './childComponent/List'
// import TodoForm from './TodoForm';
import {useParams} from 'react-router-dom';


const TodoDetail =(props)=>{
  const [task,setTask]=useState('')

  const {todoId}= useParams();

  return(
    <React.Fragment>
        <h2>タスク詳細画面</h2>
        {/* {props.todos.map((todo,index)=>(
            <li key={index}>{todo.title}</li>
        ))} */}
        {props.todos[{todoId}]}
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  todos: state.todoReducer.todos
})

// const mapDispatchToProps = dispatch =>({
//   addTodo:(task)=>dispatch(addTodo(task)),
//   deleteTodo:(index)=>dispatch(deleteTodo(index)),
//   doneTodo:(index)=>dispatch(doneTodo(index))
// })

export default connect(mapStateToProps)(TodoDetail);

// export default TodoDetail;