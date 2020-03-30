import React, { Component } from 'react';
import EmpresaCardEdit from '../components/EmpresaCardEdit';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import UserData from '../components/UserData';
import UserDataEdit from '../components/UserDataEdit';

class Empresas extends Component {
    render = () => {
        return(
            <>
                <Header icon={<Hamburguer/>} title={"Empresas"}></Header>

                <UserDataEdit name={"Nome"}
                          email={"Email"}
                          password={"************"}
                    ></UserDataEdit>

            </>
        )
    }
}

export default Empresas;