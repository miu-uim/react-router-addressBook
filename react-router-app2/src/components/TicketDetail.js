import React from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {createTicket} from '../actions'
import {useHistory} from 'react-router-dom';


const TicketDetail =(props)=>{
  const {ticketId} = useParams();
  const history = useHistory();
  const handleLink = path => history.push(path)

  //indexが一致するticketListsを取ってきてdetailという変数にオブジェクトを格納
  const detail = props.ticketLists[ticketId- 1]
 
  const detailTitle = detail ? detail.ticketTitle : '';
  const detailDetail = detail ? detail.ticketDetail : '';
  const detailInCharge = detail ? detail.inChargeName : '';
  const detailDeadline = detail ? detail.deadLine : '';
  const detailStartLine = detail ? detail.startLine : '';

  return(
    <React.Fragment>
        <h2>チケット詳細画面</h2>
        <ul>
          <li>チケット名：{detailTitle}</li>
          <li>チケット詳細：{detailDetail}</li>
          <li>担当者：{detailInCharge}</li>
          <li>期日：{detailDeadline}</li>
          <li>開始日：{detailStartLine}</li>
        </ul>
        <button type="button" onClick={()=>{handleLink('/')}}>一覧へ</button>
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  ticketLists:state.createTicket.ticketLists
})

// const mapDispatchToProps = dispatch =>({
//   addTodo:(task)=>dispatch(addTodo(task)),
//   deleteTodo:(index)=>dispatch(deleteTodo(index)),
//   doneTodo:(index)=>dispatch(doneTodo(index))
// })
const mapDispatchToProps = dispatch =>({
  createTicket:(ticket)=>dispatch(createTicket(ticket))
})
export default connect(mapStateToProps,mapDispatchToProps)(TicketDetail);

// export default TodoDetail;