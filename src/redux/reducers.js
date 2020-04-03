import { SET_PASSWORD,
         SET_EMAIL,
         SET_LOGIN_LABEL,
         OPEN_DRAWER,
        IS_INSIDE_DRAWER } from './actions';

const initialState = {
    password:"",
    email:"",
    login_label:"",
    drawer_open:undefined,
    is_inside_drawer:""
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
        case OPEN_DRAWER:
            return Object.assign({}, state, {
                drawer_open:action.drawer_open
            });
        case IS_INSIDE_DRAWER:
            return Object.assign({}, state, {
                is_inside_drawer:action.is_inside_drawer
            });
        default:
            return state;
    }
}


export default reducer;