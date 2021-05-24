import React, {useState} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import {addTodo,deleteTodo,doneTodo} from '../actions'
import {Home} from './childComponent/Home'
import {About} from './childComponent/About'
import {List} from './childComponent/List'
import {Error} from './childComponent/Error'
// import {useParams} from 'react-router-dom';


const App =(props)=>{
  const [task,setTask]=useState('')

  const createTask = e =>{
    setTask(e.target.value)
  }
  const addTask=()=>{
    if(task === '')return
    props.addTodo(task)
    setTask('')
  }
  const deleteTask=(index)=>{
    props.deleteTodo(index)
  }
  const doneTask=(index)=>{
    props.doneTodo(index)
  }
  return(
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <ul>

              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/list/777'>List</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path ='/about' exact component={About} />
            <Route path ='/list/:listId' exact component={List} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
      <h2>TODO List Router</h2>
      <input value ={task} onChange={createTask} />
      <button onClick={addTask}>追加</button>
      <ul>
        {props.todos.map((todo,index)=>(
          <li key={index}>
          {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
          {todo.flg ? <button onClick={()=>{doneTask(index)}}>未完了</button> : <button onClick={()=>{doneTask(index)}}>完了</button>}
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

export default connect(mapStateToProps,mapDispatchToProps) (App);