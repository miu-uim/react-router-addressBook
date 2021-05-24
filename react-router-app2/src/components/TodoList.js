import React, {useState} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import {addTodo,deleteTodo,doneTodo} from '../actions'
import TodoDetail from './TodoDetail'
import {Error} from './childComponent/Error'
import TodoForm from './TodoForm';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const TodoList =(props)=>{
  const [task,setTask]=useState('')

  // const createTask = e =>{
  //   setTask(e.target.value)
  // }
  // const addTask=()=>{
  //   if(task === '')return
  //   props.addTodo(task)
  //   setTask('')
  // }
  const deleteTask=(index)=>{
    props.deleteTodo(index)
  }
  const doneTask=(index)=>{
    props.doneTodo(index)
  }

  const {todoId} = useParams();

  const history = useHistory();
  const handleLink = path => history.push(path)

  return(
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route path ='/tododetail/:todoId' component={TodoDetail} />
            <Route path ='/todolist' />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
      <h2>タスク一覧</h2>
      <Link to ='/tododetail/:todoId'>タスク一覧テスト</Link>
      {/* <input value ={task} onChange={createTask} />
      <button onClick={addTask}>追加</button> */}
      <ul>
        {props.todos.map((todo,index)=>(
          <li key={index}>
          {/* {todo.id = index} */}
          {todo.flg ? <del>{todo.title}</del> : <span><a onClick={()=>{handleLink(`/tododetail/${todo.id}`)}}>{todo.title}</a></span>}
          {todo.flg ? <button onClick={()=>{doneTask(todo.id)}}>未完了</button> : <button onClick={()=>{doneTask(index)}}>完了</button>}
          <button onClick={()=>{deleteTask(index)}}>削除</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = dispatch =>({
  addTodo:(task)=>dispatch(addTodo(task)),
  deleteTodo:(index)=>dispatch(deleteTodo(index)),
  doneTodo:(index)=>dispatch(doneTodo(index))
})

export default connect(mapStateToProps,mapDispatchToProps) (TodoList);