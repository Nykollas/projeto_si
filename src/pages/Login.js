import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';

class Login  extends Component {
    render = () => {
        return(
            <Header icon={<Hamburguer/>} title={"Login"}></Header>
        )
    }
}

export default Login;