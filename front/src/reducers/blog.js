const blog = (state = {}, action) => {
    switch(action.type){
        case "SET_BLOGDATA":
            return {
                ...state,
                ...action.value
            }
        case "auth_login_success":
            return {
                ...state,
                ...action.value
            }
      
        default:
            return state
    }
}

export default blog;