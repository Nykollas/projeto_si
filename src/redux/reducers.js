import {
    SET_PASSWORD,
    SET_EMAIL,
    SET_LOGIN_LABEL,
    OPEN_DRAWER,
    IS_INSIDE_DRAWER,
    SET_ID,
    SET_DATA,
    ADD_EMPRESA,
    DEL_EMPRESA,
    SET_LAST_EMPRESA,
    UPDATE_EMPRESA,
    CLEAN_EMPRESAS,
    CLEAN_CREDENTIALS,
    OPEN_MODAL
} from './actions';

const initialState = {

    id: "",
    password: "",
    email: "",
    login_label: "",
    drawer_open: undefined,
    is_inside_drawer: "",
    empresas: new Array(),
    editIndex: 0,
    modal: false,
    modalType: 1, // 1, 2 or 3,
    data: {
        name: "",
        phone: "",
        email: "",
        street: "",
        place: "",
        city: "",
        uf: "",
        hashtags:new Array(),
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PASSWORD:
            return Object.assign({}, state, {
                password: action.password
            })
        case SET_EMAIL:
            return Object.assign({}, state, {
                email: action.email
            });
        case SET_LOGIN_LABEL:
            return Object.assign({}, state, {
                login_label: action.label
            });
        case OPEN_DRAWER:
            return Object.assign({}, state, {
                drawer_open: action.drawer_open
            });
        case IS_INSIDE_DRAWER:
            return Object.assign({}, state, {
                is_inside_drawer: action.is_inside_drawer
            });
        case SET_ID:
            return Object.assign({}, state, {
                id: action.id
            });
        case SET_DATA:
            return Object.assign({}, state, {
                data: action.data
            });

        case ADD_EMPRESA:
            return Object.assign({}, state, {
                empresas: [...state.empresas, action.empresa]
            });
        case SET_LAST_EMPRESA:
            return Object.assign({}, state, {
                empresas: state.empresas.filter((val, index, arr) => {
                    if (index != arr.length - 1) {
                        return val;
                    } else {
                        return action.empresa
                    }
                })
            });
        case UPDATE_EMPRESA:
            return Object.assign({}, state, {
                empresas: state.empresas.filter((val, index, arr) => {

                    if (index == action.index) {

                        return action.empresa;
                    } else {
                        return val;
                    }
                })
            });

        case DEL_EMPRESA:
            return Object.assign({}, state, {
                empresas: state.empresas.filter((val, index, arr) => {
                    if (index !== action.index) {
                        return val;
                    }
                })
            });
        case CLEAN_EMPRESAS:
            return Object.assign({}, state, {
                empresas: state.empresas.filter((val, index, arr) => {
                    if (index > arr.length) {

                        return;
                    }
                })
            });

        case CLEAN_CREDENTIALS:
            return Object.assign({}, state, { email: "", password: "" });

        case OPEN_MODAL:
            return Object.assign({}, state, { modal: action.modal, modalType: action.modalType, data: action.data });
        default:
            return state;
    }
}

export default reducer;