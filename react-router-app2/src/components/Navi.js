import React from 'react';
import {useHistory} from 'react-router-dom';

const Nav = props =>{
    const history = useHistory();
    const handleLink = path =>history.push(path);
    return (
        <nav>
            <button onClick={()=>handleLink('/')}>新規タスク登録</button>
            <button onClick={()=>handleLink('/todolist')}>タスク一覧</button>
        </nav>
    )
}

export default Nav