import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Illustration from '../assets/images/illustration';
import Button from '../components/Button';
import Drawer from '../components/Drawer';
import { connect} from 'react-redux';
import  * as actions from '../redux/actions'

class Login  extends Component {


    handleEmail = (event) => {
        const { setEmail } = this.props;
        const email = event.target.value;
        setEmail(email);
    }
    handlePassword = (event) => {
        const {setPassword} = this.props;
        const password = event.target.value;
        setPassword(password);
    }

    render = () => {

        const {setLoginLabel } = this.props;
        
        return(
            <> 
                <Header drawer={false} icon = { <Hamburguer/> } title = { "Login" }></Header>
                <Drawer></Drawer>
                <Card submitButton = { <Button buttonAction={setLoginLabel} title = {"Entrar" }></Button> } title = { "Login" }>
                    <Input inputHandler = { this.handleEmail } placeholder = { 'E-mail' }></Input>
                    <Input inputHandler = { this.handlePassword } placeholder = { 'Senha' }></Input>
                    <div className = { "password-recovery-label-container" }>
                        <p className = { "password-recovery-label" }>Esqueci minha senha</p>
                    </div>
                </Card>
                <div className = {"illustration-container"}>
                    <Illustration height = {false} width = {600}></Illustration>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    state:state
})

const mapDispatchToProps  = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
