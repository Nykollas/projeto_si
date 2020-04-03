import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';

import UserDataEdit from '../components/UserDataEdit';

class Empresas extends Component {
    render = () => {
        return(
            <>
                <Header icon={<Hamburguer/>} title={"Empresas"}></Header>
                <UserDataEdit name={"Nome"} email={"Email"} password={"************"}/>
            </>
        )
    }
}

export default Empresas;