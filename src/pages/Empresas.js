import React, { Component } from 'react';
import EmpresaCardEdit from '../components/EmpresaCardEdit';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import UserData from '../components/UserData';

class Empresas extends Component {
    render = () => {
        return(
            <>
                <Header icon={<Hamburguer/>} title={"Empresas"}></Header>

                <UserData name={"Nome"}
                          email={"Email"}
                          password={"************"}
                    ></UserData>

            </>
        )
    }
}

export default Empresas;