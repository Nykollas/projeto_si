import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Illustration from '../assets/images/illustration';
import Button  from '../components/Button';
import { connect} from 'react-redux';
import Drawer from '../components/Drawer';
import  * as actions from '../redux/actions'

class PasswordRecoveryCode  extends Component {
    render = () => {
        return(
            <> 
            <Header icon={<Hamburguer/>} title={"Recuperar Senha"}></Header>
                <Drawer></Drawer>
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

const mapStateToProps = state => ({
    state:state
})

const mapDispatchToProps  = actions;

export default connect(mapStateToProps, mapDispatchToProps)(PasswordRecoveryCode);

