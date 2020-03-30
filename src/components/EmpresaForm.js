import React, { Component } from 'react';
import Input from './EmpresaInput';

class EmpresaData extends Component {
    render = () => {
        return(
            <div className={'empresa-inputs-container'}>
                <Input placeholder={"Telefone"}></Input>
                <Input placeholder={"E-mail"}></Input>
                <Input placeholder={"Rua"}></Input>
                <Input placeholder={"Bairro"}></Input>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <Input placeholder={"Cidade"}></Input>
                    <Input placeholder={"Estado"}></Input>
                </div>
            </div>
        );
    }
}

export default EmpresaData;