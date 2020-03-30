import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Carousel from '../components/Carousel';
class Empresas extends Component {
    constructor(props){
        super(props);
    }
    render = () => {
        return(
            <>
                <Header icon={<Hamburguer/>} title={"Dashboard"}></Header>
                <Carousel></Carousel>

            </>
        )
    }
}

export default Empresas;