import {SET_PASSWORD, SET_EMAIL, SET_LOGIN_LABEL} from './actions';

const initialState = {
    password:"",
    email:"",
    login_label:""

}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case SET_PASSWORD:

            return Object.assign({}, state, {
                password:action.password
            })
        case SET_EMAIL:
            return Object.assign({}, state, {
                email:action.email
            });
        case SET_LOGIN_LABEL:
            return Object.assign({}, state, {
                login_label:action.label
            });
        default:
            return state;
    }
}


export default reducer;