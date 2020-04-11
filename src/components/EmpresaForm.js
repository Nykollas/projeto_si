import React, { Component } from 'react';
import Input from './EmpresaInput';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';

class EmpresaForm extends Component {

    state = {

        form_name: "",
        form_phone: "",
        form_email: "",
        form_street: "",
        form_place: "",
        form_city: "",
        form_uf: ""

    }

    handleName = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data,
                adding } = this.props;
        if (adding) {
            let dados = add_data;
            dados.name = event.target.value;
            setAddData(dados);
        } else {
            let dados = update_data;
            dados.name = event.target.value;
            setUpdateData(dados);
   
        }

    }

    handlePhone = (event) => {
        const { setAddData, setUpdateData,update_data, add_data, adding } = this.props;
         if (adding) {
            const dados = add_data;
            dados.tel = event.target.value;
            setAddData(dados)
        } else {
            const dados = update_data;
            dados.tel = event.target.value;
            setUpdateData(dados);
        }
    }

    handleEmail = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data,
                adding } = this.props;

         if (adding) {
            const dados = add_data;
            dados.email = event.target.value;
            setAddData(dados);
        } else {
            const dados = update_data;
            dados.email = event.target.value;
        
            setUpdateData(dados);
        }
    }

    handleStreet = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data, adding } = this.props;

         if (adding) {

            const dados = add_data;
            dados.street = event.target.value;
            setAddData(dados)

        } else {

            const dados = update_data;
            dados.street = event.target.value;
            setUpdateData(dados);

        }
    }
    handlePlace = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data,
                adding } = this.props;

         if (adding) {
            const dados = add_data;
            dados.place = event.target.value;
            setAddData(dados)
        } else {
            const dados = update_data;
            dados.place = event.target.value;
            setUpdateData(dados);
        }
    }

    handleCity = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data,
                adding } = this.props;
         if (adding) {
            const dados = add_data;
            dados.city = event.target.value;
            setAddData(dados)
        } else {
            const dados = update_data;
            dados.city = event.target.value;
            setUpdateData(dados);
        }
    }

    handleUf = (event) => {
        const { setAddData,
                setUpdateData,
                update_data,
                add_data, adding } = this.props;

         if (adding) {

            const dados = add_data;
            dados.uf = event.target.value;
            setAddData(dados);

        } else {

            const dados = update_data;
            dados.uf = event.target.value;
            setUpdateData(dados);

        }
    }

    componentDidMount = () => {
        
    }

    render = () => {

        const { data, update_data,adding, add_data }  = this.props;
        
        return (
            <div className={'empresa-inputs-container'}>
                <Input inputHandler={this.handleName}   value={adding ? add_data.name : update_data.name} placeholder={"Nome"}></Input>
                <Input inputHandler={this.handlePhone}  value={adding ? add_data.tel : update_data.tel} placeholder={"Telefone"}></Input>
                <Input inputHandler={this.handleEmail}  value={adding ? add_data.email : update_data.email } placeholder={"E-mail"}></Input>
                <Input inputHandler={this.handleStreet} value={adding ? add_data.street : update_data.street} placeholder={"Rua"}></Input>
                <Input inputHandler={this.handlePlace}  value={adding ? add_data.place : update_data.place} placeholder={"Bairro"}></Input>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input inputHandler={this.handleCity }  value={ adding ? add_data.city : update_data.city } placeholder={"Cidade"}></Input>
                    <Input inputHandler={this.handleUf }  value={adding ? add_data.uf : update_data.uf} placeholder={"Estado"}></Input>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    add_data: state.add_data ,
    update_data:state.update_data,
    adding:state.adding
});

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
