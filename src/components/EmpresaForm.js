import React, { Component } from 'react';
import Input from './EmpresaInput';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';

class EmpresaForm extends Component {

    handleName = (event) => {
        const { setData,
            data,
        } = this.props;

        data.name = event.target.value;
        console.log(data.name);
        setData(data);
    }


    handlePhone = (event) => {
        const { setData,
            data,
        } = this.props;
        data.tel = event.target.value;
        setData(data)
    }

    handleEmail = (event) => {
        const { setData,
            data,
        } = this.props;
        data.email = event.target.value;
        setData(data);
    }

    handleStreet = (event) => {
        const { setData,
            data,
        } = this.props;
        data.street = event.target.value;
        setData(data);
    }
    handlePlace = (event) => {
        const { setData,
            data,
        } = this.props;
        data.place = event.target.value;
        setData(data)
    }

    handleCity = (event) => {
        const { setData,
            data,
        } = this.props;
        data.city = event.target.value;
        setData(data)
    }

    handleUf = (event) => {
        const { setData,
            data,
        } = this.props;
        data.uf = event.target.value;
        setData(data);
    }

    handleCategory = (event) => {
        const { setData,
            data,
        } = this.props;
        data.category = event.target.value;
        setData(data);
    }
    
    render = () => {

        const { data } = this.props;
        return (
            <div className={'empresa-inputs-container'}>
                <Input inputHandler={this.handleName} value={data ? data.name : ""} placeholder={"Nome"}></Input>
                <Input inputHandler={this.handlePhone} value={data ? data.tel : ""} placeholder={"Telefone"}></Input>
                <Input inputHandler={this.handleEmail} value={data  ? data.email : ""} placeholder={"E-mail"}></Input>
                <Input inputHandler={this.handleStreet} value={data ? data.street : ""} placeholder={"Rua"}></Input>
                <Input inputHandler={this.handlePlace} value={data ? data.place : ""} placeholder={"Bairro"}></Input>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input inputHandler={this.handleCity} value={data ? data.city : ""} placeholder={"Cidade"}></Input>
                    <Input inputHandler={this.handleUf} value={data ? data.uf : ""} placeholder={"Estado"}></Input>
                </div>
                <Input inputHandler={this.handleCategory} value={data ? data.category : ""} placeholder={"Categoria"}></Input>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
});

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(EmpresaForm);
