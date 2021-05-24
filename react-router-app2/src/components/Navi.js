import React from 'react';
import {useHistory} from 'react-router-dom';

const Nav = props =>{
    const history = useHistory();
    const handleLink = path =>history.push(path);
    return (
        <nav>
            <button onClick={()=>handleLink('/')}>TODO List</button>
            <button onClick={()=>handleLink('/about')}>About</button>
        </nav>
    )
}

export default Nav