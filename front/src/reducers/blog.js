const blog = (state = {}, action) => {
    
    console.log("blog*-------------------------", action);
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
            console.log('default Reducer:')
            return state
    }
}

export default blog;