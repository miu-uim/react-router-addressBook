import {ADDTODO,DELETETODO,DONETODO} from '../actions'

const initialState = {
    todos:[]
}

const reducers = (state = initialState,action)=>{
    switch(action.type){
        case ADDTODO:
            return {
                todos:[...state.todos,action.todo]
            }
        case DELETETODO:
            const newTodos1 = [...state.todos]
            newTodos1.splice(action.index,1)
            return {
                todos:newTodos1
            }
        case DONETODO:
            const newTodos2 = [...state.todos]
            newTodos2[action.index].flg = !newTodos2[action.index].flg
            return {
                todos:newTodos2
            }
        default:
            return state    
    }
}

export default reducers