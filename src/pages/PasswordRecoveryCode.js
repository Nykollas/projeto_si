import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Illustration from '../assets/images/illustration';
class Login  extends Component {
    render = () => {
        return(
            <> 
            <Header icon={<Hamburguer/>} title={"Recuperar Senha"}></Header>
                <Card  submitButton={<Button title={"Enviar"}></Button>} title={"Login"} >
                    <Input placeholder= {'Código'}></Input>
                </Card>
                <div className={"illustration-container"}>
                    <Illustration></Illustration>
                </div>
            </>
        )
    }
}

export default Login;
