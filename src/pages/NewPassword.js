import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Button from '../components/Input';
import Illustration from '../assets/images/illustration';
class Login  extends Component {
    render = () => {
        return(
            <> 
            <Header icon={<Hamburguer/>} title={"Recuperar Senha"}></Header>
                <Card submitButton={<Button title={"Redefinir"}></Button>} title={"Login"} >
                    <Input placeholder= {'Senha Atual'}></Input>
                    <Input placeholder= {'Nova Senha'}></Input>
                </Card>
                <div className={"illustration-container"}>
                    <Illustration></Illustration>
                </div>
            </>
        )
    }
}

export default Login;
