import {useParams} from 'react-router-dom';
export const List = ()=>{
    const {listId} = useParams();
    return(
        <div>
            <h2>TodoListルーター版</h2>
            <p>List ID:{listId}</p>
        </div>
    ) 
}