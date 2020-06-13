//Login
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOGIN_LABEL = 'SET_LOGIN_LABEL';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const IS_INSIDE_DRAWER = 'IS_INSIDE_DRAWER';
export const SET_DATA = "SET_DATA";
export const SET_ID = "SET_ID";
export const ADD_EMPRESA = "ADD_EMPRESA";
export const UPDATE_EMPRESA = "UPDATE_EMPRESA";
export const DEL_EMPRESA = "DEL_EMPRESA";
export const SET_LAST_EMPRESA = "SET_LAST_EMPRESA";
export const CLEAN_EMPRESAS = "CLEAN_EMPRESAS";
export const CLEAN_CREDENTIALS = "CLEAN_CREDENTIALS";
export const OPEN_MODAL = "OPEN_MODAL";

//Login Actions
const setEmail = (email) => {
    return { type: SET_EMAIL, email: email }
}

const setPassword = (pswd) => {
    return { type: SET_PASSWORD, password: pswd }
}

const setLoginLabel = (label) => {
    return { type: SET_LOGIN_LABEL, label: label }
}

const openDrawer = (value) => {
    return { type: OPEN_DRAWER, drawer_open: value }
}

const isInsideDrawer = (value) => {
    return { type: IS_INSIDE_DRAWER, is_inside_drawer: value }
}


const setId = (value) => {
    return { type: SET_ID, id: value }
}

const cleanEmpresas = () => {
    return { type: CLEAN_EMPRESAS }
}

const updateEmpresa = (value, index) => {

    return {
        type: UPDATE_EMPRESA,
        empresa: {
            _id: value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        },
        index: index
    }
}

const addEmpresa = (value) => {
    return {
        type: ADD_EMPRESA, empresa: {
            _id: value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category,
            img: value.img,
            hashtags:value.hashtags
        }
    }
}

const setLastEmpresa = (value) => {
    return {
        type: SET_LAST_EMPRESA,
        empresa: {
            id_: value._id,
            name: value.name,
            email: value.email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel: value.tel,
            category: value.category
        },
    }
}

const setData = (value, reset=false) => {
    return {
        type: SET_DATA, data: {
            _id: !reset ? value._id : "",
            name: !reset ? value.name : "",
            email: !reset ? value.email : "",
            street: !reset ? value.street : "",
            place: !reset ? value.place : "",
            city: !reset ? value.city : "",
            uf: !reset ? value.uf : "",
            tel: !reset ? value.tel : "",
            category: !reset ? value.category : "",
            hashtags: !reset ? value.hashtags : "",
        }
    }
}



const removeEmpresa = (value) => {
    return {
        type: DEL_EMPRESA, index: value
    }
}

const cleanCredentials = () => {
    return {
        type: CLEAN_CREDENTIALS
    }
}

const openModal = (value) => {
    return {
        type: OPEN_MODAL,
        modal: value.modal,
        modalType: value.modalType,
        data: value.data
    }
}

export { setEmail };
export { setPassword };
export { setLoginLabel };
export { openDrawer };
export { isInsideDrawer };
export { setId };
export { addEmpresa };
export { removeEmpresa };
export { setData };
export { openModal };
export { setLastEmpresa };
export { updateEmpresa };
export { cleanEmpresas };
export { cleanCredentials }