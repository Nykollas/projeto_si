import React, { Component } from 'react';
import Input from './EmpresaInput';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';

class EmpresaForm extends Component {
    render = () => {

        const {
            setPhone,
            setEnterpriseEmail,
            setStreet,
            setPlace,
            setCity,
            setUf
        } = this.props;


        return(
            <div
             className={'empresa-inputs-container'}>
                 <Input inputAction={ setPhone } placeholder={"Nome"}></Input>
                <Input inputAction={ setPhone } placeholder={"Telefone"}></Input>
                <Input inputAction={ setEnterpriseEmail } placeholder={"E-mail"}></Input>
                <Input inputAction={ setStreet } placeholder={"Rua"}></Input>
                <Input inputAction={ setPlace } placeholder={"Bairro"}></Input>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Input inputAction={ setCity } placeholder={"Cidade"}></Input>
                    <Input inputAction={ setUf } placeholder={"Estado"}></Input>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps  = actions;

export default connect(null, mapDispatchToProps)(EmpresaForm);
