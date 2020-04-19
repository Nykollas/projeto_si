import React, { Component } from 'react';
import EmpresaForm from './EmpresaForm';
import Hashtags from './Hashtags';

import SaveButton from '../assets/images/editsave';
import CloseIcon from '../assets/images/closeicon';

import * as actions from '../redux/actions';

import { connect } from 'react-redux';



class EmpresaCardAdd extends Component {

    constructor(props) {
        super(props);
    }

    validateData = (data) => {
        return true;
    }

    onClick = () => {

        const { add_data, setAdd, empresasRef, setAddData } = this.props;

        const isValid = this.validateData(add_data);

        const requestConfig = {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(add_data),

        }

        if (isValid) {

            fetch("https://backend-si.herokuapp.com/empresas/create", requestConfig).then(res => {
                res.json().then(response => {
                    empresasRef.getData();
                }).catch(err => {

                });
            }).then(() => {

                const data = {
                    _id: "",
                    name: "",
                    phone: "",
                    email: "",
                    street: "",
                    place: "",
                    city: "",
                    uf: ""
                }
                setAddData(data);
                setAdd(false);
            });
        }
    }

cancel = () => {
    const { removeEmpresa, setAdd, index, empresas } = this.props;
    removeEmpresa(0);
    setAdd(false);
}


render = () => {

    return (
        <div className={'empresa-card-container'}>
            <div className={'empresa-col'}>
                <div className={'empresa-row'}>
                    <img alt={"Empresa"} src={'https://www.w3schools.com/w3css/img_lights.jpg'}></img>
                </div>
                <div className={'empresa-row'}>
                    <Hashtags></Hashtags>
                </div>
            </div>
            <div className={'empresa-col'}>
                <div className={'empresa-row'}>
                    <EmpresaForm ref={comp => { this.formRef = comp; }}></EmpresaForm>
                    <CloseIcon onClick={this.cancel} size={120}></CloseIcon>
                </div>
                <div className={'empresa-row'}>
                    <div className={'empresa-category-container'}>
                        <p>Categoria</p>
                    </div>
                    <SaveButton onClick={this.onClick} height={140} width={150}></SaveButton>
                </div>
            </div>
        </div>
    );
}
}

const mapDispatchToProps = actions;


const mapStateToProps = (state) => {
    return { 
        add_data: state.add_data,
        empresas: state.empresas,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmpresaCardAdd);