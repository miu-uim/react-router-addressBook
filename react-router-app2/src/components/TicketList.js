import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link,useRouteMatch } from 'react-router-dom';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

const TicketList =(props)=>{
  const history = useHistory();
  const handleLink = path => history.push(path);
  const macth = useRouteMatch();

  return(
    <React.Fragment>
      <h3>チケットリスト</h3>
      <Router>
        <ol>
          {props.ticketLists.map((ticket,index)=>{
            return (<li key={index}><a onClick={()=>{handleLink(`/ticketDetail/${ticket.id}`)}}>{ticket.ticketTitle} 担当者：{ticket.inChargeName}</a></li>
            )
          })}
        </ol>
        <Switch>

        </Switch>
      </Router>
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  ticketLists:state.createTicket.ticketLists
})

export default connect(mapStateToProps)(TicketList)