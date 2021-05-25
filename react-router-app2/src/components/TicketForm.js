import React from 'react';
import {connect} from 'react-redux';
import {createTicket} from '../actions'
import {useHistory} from 'react-router-dom';

const TicketForm =(props)=>{

  const history = useHistory();
  const handleLink = path =>history.push(path);

  const addTicket=(e)=>{
    //フォームの要素を取得
    //要素自身の1つ上の兄弟要素<ul>の中の<li>要素を1つずつ配列に入れる
    let listElements = Array.from(e.target.previousElementSibling.getElementsByTagName('li'));
    //inputのvalueだけ入れる空のオブジェクトを用意
    const valueList = {};
    //listElements（<li>）を1つずつ取ってitemに入れる。
    //itemの一番後ろの子要素（<input>or<textarea>）を取得
    listElements.forEach((item)=>{
      const element = item.lastChild;
      //valueListは<input>のnameがkey名になり、値が<input>要素のvalueになる
      valueList[element.name] = element.value;
      //<li>の数だけforEachする
    })
    valueList.id = props.ticketLists.length +1
    props.createTicket(valueList)
    handleLink('/');

  }

  return(
    <React.Fragment>
      <h2>新規チケットの作成</h2>
      <ul>
        <li>チケット名：<input name="ticketTitle" type="text"/></li>
        <li>チケット詳細：<textarea name="ticketDetail" type="text"/></li>
        <li>担当者：<input name="inChargeName" type="text"/></li>
        <li>期日：<input name="deadLine" type="date"/></li>
        <li>開始日：<input name="startLine" type="date"/></li>
      </ul>
      <button onClick={(e)=>{addTicket(e)}}>チケット発行</button>
    </React.Fragment>
  )
}
const mapStateToProps = state =>({
  ticketLists:state.createTicket.ticketLists
})

const mapDispatchToProps = dispatch =>({
  createTicket:(ticket)=>dispatch(createTicket(ticket))
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);