export const ADDTODO ='addTodo'
export const DELETETODO ='deleteTodo'
export const DONETODO ='doneTodo'

export const addTodo = (task,id)=>{
    return{
        type: ADDTODO,
        todo:{
            id:id,
            title:task,
            flg:false,
        }
    }
}    
export const deleteTodo = (index)=>{
    return{
        type: DELETETODO,
        index:index
    }
}    
export const doneTodo = (index)=>{
    return{
        type: DONETODO,
        index:index
    }
}    
