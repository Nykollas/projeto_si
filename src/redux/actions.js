//Login
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_LOGIN_LABEL = 'SET_LOGIN_LABEL';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const IS_INSIDE_DRAWER = 'IS_INSIDE_DRAWER';
export const SET_PHONE = "SET_PHONE";
export const SET_ENTERPRISE_EMAIL = "SET_ENTERPRISE_EMAIL";
export const SET_STREET = "SET_STREET";
export const SET_PLACE = "SET_PLACE";
export const SET_CITY = "SET_CITY";
export const SET_UF = "SET_UF";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_ADD = "SET_ADD";
export const SET_ID = "SET_ID";
export const ADD_EMPRESA = "SET_EMPRESA";
export const DEL_EMPRESA = "DEL_EMPRESA";

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

const setPhone = (value) => {
    return { type: SET_PHONE, phone: value }
}

const setEnterpriseEmail = (value) => {
    return { type: SET_ENTERPRISE_EMAIL, enterprise_email: value }
}

const setStreet = (value) => {
    return { type: SET_STREET, street: value }
}

const setPlace = (value) => {
    return { type: SET_PLACE, place: value }
}

const setCity = (value) => {
    return { type: SET_CITY, city: value }
}

const setUF = (value) => {
    return { type: SET_UF, uf: value }
}

const setCategory = (value) => {
    return { type: SET_UF, category: value }
}

const setAdd = (value) => {
    return { type: SET_ADD, adding: value }
}

const setId = (value) => {
    return { type: SET_ID, id: value }
}

const addEmpresa = (value) => {
    return {
        type: ADD_EMPRESA, empresa: {
            name: value.name,
            enterprise_email: value.enterprise_email,
            street: value.street,
            place: value.place,
            city: value.city,
            uf: value.uf,
            tel:value.tel,
            category: value.category
        }
    }
}

const removeEmpresa = ( value ) => {
    return {
        type: DEL_EMPRESA,index:value
    }
}


export { setEmail };
export { setPassword };
export { setLoginLabel };
export { openDrawer };
export { isInsideDrawer };
export { setPhone };
export { setEnterpriseEmail };
export { setStreet };
export { setPlace };
export { setCity };
export { setUF };
export { setCategory };
export { setAdd };
export { setId };
export { addEmpresa }
export { removeEmpresa }