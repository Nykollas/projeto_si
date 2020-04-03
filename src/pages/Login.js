import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Illustration from '../assets/images/illustration';
import Button from '../components/Button';
import { connect} from 'react-redux';
import Drawer from '../components/Drawer';
import  * as actions from '../redux/actions'

class Login  extends Component {
    render = () => {

        const {setEmail, setPassword, setLoginLabel } = this.props;
        
        return(
            <> 
                <Header icon = { <Hamburguer/> } title = { "Login" }></Header>
                <Drawer></Drawer>
                <Card submitButton = { <Button buttonAction={setLoginLabel} title = {"Entrar" }></Button> } title = { "Login" }>
                    <Input inputAction = { setEmail } placeholder = { 'E-mail' }></Input>
                    <Input inputAction = { setPassword } placeholder = { 'Senha' }></Input>
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
