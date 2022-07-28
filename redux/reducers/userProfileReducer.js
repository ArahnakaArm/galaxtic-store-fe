import {CREATE_USER_PROFILE ,EDIT_USER_PROFILE , DELETE_USER_PROFILE} from '../actions/userProfileActions'

/* const userProfileReducer = (state = {} , action) => {
    switch(action.type){
        case CREATE_USER_PROFILE:
            return action.data
        case EDIT_USER_PROFILE:
            return {}
        case DELETE_USER_PROFILE:
            return {}
        default: 
            return state    
    }
}
 */

const initialState = {
    users: {},
  };
  
  const userProfileReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case CREATE_USER_PROFILE:
        return {...state, name : action.user.name};
  
      case DELETE_USER_PROFILE:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userProfileReducer;
  