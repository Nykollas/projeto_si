import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Drawer from '../components/Drawer';
import UserDataEdit from '../components/UserDataEdit';
import UserData from '../components/UserData';
import { connect} from 'react-redux';

import  * as actions from '../redux/actions'

class Empresas extends Component {
    render = () => {
        return(
            <>
                <Header icon={<Hamburguer/>} title={"Empresas"}></Header>
                <Drawer></Drawer>
                <UserData></UserData>
                <UserDataEdit name={"Nome"} email={"Email"} password={"************"}/>
            </>
        )
    }
}

const mapStateToProps = state => ({
    state:state
})

const mapDispatchToProps  = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Empresas);