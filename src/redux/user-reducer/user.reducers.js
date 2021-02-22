import UserActionsTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.GOOGLE_SIGN_IN_START:
    case UserActionsTypes.EMAIL_SIGN_IN_START:
    case UserActionsTypes.SIGN_UP_START:
      return{
        ...state
      }
    case UserActionsTypes.SIGN_IN_SUCCESS:
    case UserActionsTypes.SIGN_UP_SUCCESS:
      return{
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return{
        ...state,
        currentUser: null,
        error: null
      }
    case UserActionsTypes.SIGN_IN_FAILURE:
    case UserActionsTypes.SIGN_OUT_FAILURE:
    case UserActionsTypes.SIGN_UP_FAILURE:
      return{
        ...state,
        error: action.payload
      }
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;