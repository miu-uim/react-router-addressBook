import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link } from 'react-router-dom';
import TicketForm from './TicketForm';
import Nav from './Navi'
import TicketDetail from './TicketDetail';
import TicketList from './TicketList';


function App() {
  return(
      <Router>
        <Nav/>
          <Switch>
            <Route path='/ticketForm' exact component={TicketForm}/>
            <Route path ={`/ticketDetail/:ticketId`} exact component={TicketDetail}/>
            <Route path ='/' component={TicketList} />
          </Switch>
      </Router>
  );
}
export default App;