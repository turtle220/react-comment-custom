const auths = (state = {}, action) => {
    switch(action.type){
        case "auth_login_success":
            return {
                ...state,
                ...action.value
            }
            case "auth_login_failure":
                return {
                    ...state,
                    ...action.value
                }
            case "auth_logout_success":
                return {
                    ...state,
                    ...action.value
                }
            case "auth_logout_failure":
                return {
                    ...state,
                    ...action.value
                }
        default:
            console.log('default Reducer:')
            return state
    }
}

export default auths;