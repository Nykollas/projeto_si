//action types

//Login
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOGIN_LABEL = 'SET_LOGIN_LABEL';


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

export { setEmail };
export { setPassword };
export { setLoginLabel };