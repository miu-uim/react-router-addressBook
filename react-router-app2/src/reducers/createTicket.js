import {CREATETICKET} from '../actions'

const initialState = { ticketLists:[]}

export default (state = initialState,action)=>{
    switch(action.type){
        case CREATETICKET:
            const newTicketLists =[...state.ticketLists,action.ticket];
            return {ticketLists:newTicketLists}
        default:
            return state
    }
}

