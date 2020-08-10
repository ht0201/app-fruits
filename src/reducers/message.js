import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';

var initalState = Message.MSG_WELCOME;
   

const message = (state = initalState, action) => {
    
    switch(action.type) {  
        case Types.CHANGE_MESSAGE:
      

            

            return action.message;

        default: 
            return state;
    }
}



export default message;