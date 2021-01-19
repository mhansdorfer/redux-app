const INITIAL_STATE = {
    messages: []
}

const ADD_MESSAGE = "ui/ADD_MESSAGE";

const addMessage = (type, message) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            type, 
            message
        }
    }
} 

export default function uiReducer(state = INITIAL_STATE, action){
    console.log(JSON.stringify(action));
    switch(action.type){
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default: 
            return state;
    }
} 

export {addMessage};