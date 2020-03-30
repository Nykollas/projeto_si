import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Illustration from '../assets/images/illustration';
import Button from '../components/Button';
class Login  extends Component {
    render = () => {
        return(
            <> 
                <Header icon={<Hamburguer/>} title={"Login"}></Header>
                <Card   submitButton={<Button title={"Entrar"}></Button>}  title={"Login"} >
                    <Input placeholder= {'E-mail'}></Input>
                    <Input placeholder= {'Senha'}></Input>
                    <div className={"password-recovery-label-container"}>
                        <p className={"password-recovery-label"}>Esqueci minha senha</p>
                    </div>
                </Card>
                <div className={"illustration-container"}>
                    <Illustration></Illustration>
                </div>
            </>
        )
    }
}

export default Login;
