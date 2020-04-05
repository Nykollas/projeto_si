import { SET_PASSWORD,
         SET_EMAIL,
         SET_LOGIN_LABEL,
         OPEN_DRAWER,
         IS_INSIDE_DRAWER,
         SET_PHONE,
         SET_ENTERPRISE_EMAIL,
         SET_STREET,
         SET_PLACE,
         SET_CITY,
         SET_UF,
         SET_CATEGORY,
         SET_ADD,
         SET_ID,
         ADD_EMPRESA,
         DEL_EMPRESA
     } from './actions';

const initialState = {
    id:"",
    password:"",
    email:"",
    login_label:"",
    drawer_open:undefined,
    is_inside_drawer:"",
    phone:"",
    enterprise_email:"",
    street:"",
    adding:false,
    place:"",
    city:"",
    uf:"",
    category:"",
    empresas:new Array()
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
        //To split on two reducers
        case SET_PHONE:
            return Object.assign({}, state, {
                phone:action.phone
            });
        case SET_ENTERPRISE_EMAIL:
            return Object.assign({}, state, {
                enterprise_email:action.enterprise_email
            });
        case SET_STREET:
            return Object.assign({}, state, {
                street:action.street
            });
        case SET_PLACE:
            return Object.assign({}, state, {
               place:action.place
            });
        case SET_CITY:
            return Object.assign({}, state, {
                city:action.city
            });
        case SET_UF:
            return Object.assign({}, state, {
                uf:action.uf
            });
        case SET_CATEGORY:
            return Object.assign({}, state, {
                category:action.category
            });
        case SET_ADD:
            return Object.assign({}, state, {
                adding:action.adding
            });
        case SET_ID:
            return Object.assign({}, state, {
                id:action.id
            });
        case ADD_EMPRESA:
            return Object.assign({}, state, {
                empresas: [...state.empresas, action.empresa]
            });
        case DEL_EMPRESA:
            return Object.assign({}, state, {
                empresas:state.empresas.filter( (val, index, arr) => {
                    if(index != arr.length - 1){
                        return val;
                    }
                })
            });
        default:
            return state;
    }
}

export default reducer;