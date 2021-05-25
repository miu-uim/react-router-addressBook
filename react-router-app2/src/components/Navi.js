import React from 'react';
import {useHistory} from 'react-router-dom';

const Nav = (props) =>{
    const history = useHistory();
    const handleLink = path =>history.push(path);
    return (
        <React.Fragment>
            <h2>TODOチケット</h2>
                <button onClick={()=>handleLink('/ticketForm')}>新規チケット作成</button>
                <button onClick={()=>{handleLink('/')}}>チケット一覧</button>
        </React.Fragment>

    )
}

export default Nav