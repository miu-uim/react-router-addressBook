import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
// import {List} from './childComponent/List'
import {Error} from './childComponent/Error'
import Nav from './Navi'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
// import {useParams} from 'react-router-dom';


const App =()=>{
  return(
    <React.Fragment>
      <Router>
        <Nav />
        <h2>TODO List</h2>
        <hr></hr>
          <Switch>
            <Route path='/' exact component={TodoForm}/>
            <Route path ='/todolist' exact component={TodoList} />
            {/* <Route path ='/list/:listId' exact component={List} /> */}
            <Route path ='/tododetail/:todoId' exact component={TodoDetail}/>
            <Route component={Error} />
          </Switch>
      </Router>
    </React.Fragment>
  )
}
export default App;