import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';
import Input from '../components/Input';
import Button from '../components/Input';
import Illustration from '../assets/images/illustration';
import { connect} from 'react-redux';
import Drawer from '../components/Drawer';
import  * as actions from '../redux/actions'
class NewPassword  extends Component {
    render = () => {
        return(
            <> 
            <Header drawer={false} icon={<Hamburguer/>} title={"Recuperar Senha"}></Header>
            <Drawer></Drawer>
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

const mapStateToProps = state => ({
    state:state
})

const mapDispatchToProps  = actions;

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);

