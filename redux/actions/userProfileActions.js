export const CREATE_USER_PROFILE = 'CREATE_USER_PROFILE'
export const EDIT_USER_PROFILE = 'EDIT_USER_PROFILE'
export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE'


/* export const createUserProfile = () => ({
    type : CREATE_USER_PROFILE
})


export const editUserProfile = () => ({
    type : EDIT_USER_PROFILE
})


export const deleteUserProfile = () => ({
    type : DELETE_USER_PROFILE
})
 */

/* export const createUserProfile = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_SAMPLE,
        payload: [1, 2, 3, 4, 5, 6],
      });
    } catch (error) {
      dispatch({
        type: SAMPLE_ERROR,
        payload: "error message",
      });
    }
  }; */

  export const addUser = (newUser) => {
    return { type: CREATE_USER_PROFILE, user : {name : newUser} };
  };