import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Card from '../components/MainCard';

class Login  extends Component {
    render = () => {
        return(
            <>
            
            <Header icon={<Hamburguer/>} title={"Login"}></Header>
                <Card title={"Login"} >
                    
                </Card>
            </>
        )
    }
}

export default Login;