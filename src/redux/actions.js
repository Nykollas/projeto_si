//action types

//Login
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOGIN_LABEL = 'SET_LOGIN_LABEL';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const IS_INSIDE_DRAWER = 'IS_INSIDE_DRAWER';


//Login Actions
const  setEmail = (email)  => {
    return {type:SET_EMAIL, email:email}
}
const setPassword = (pswd)  => {
    return {type:SET_PASSWORD, password:pswd}
}

const setLoginLabel = (label)  => {
    return {type:SET_LOGIN_LABEL, label:label}
}

const openDrawer = (value) => {
    return {type:OPEN_DRAWER, drawer_open:value}
}

const isInsideDrawer = (value) => {
    return {type:IS_INSIDE_DRAWER, is_inside_drawer:value}
}


export { setEmail };
export { setPassword };
export { setLoginLabel };
export { openDrawer };
export { isInsideDrawer };