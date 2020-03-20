const initialState = {
  isFetching: false,
  user: null,
  error: null,
};
export default function authReducer (state = initialState, action) {

  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false,
      };
    case ACTION_TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
}