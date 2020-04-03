import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Carousel from '../components/Carousel';
import Table from '../components/Table';
import Illustration from '../assets/images/illustration';
import Drawer from '../components/Drawer';

class Empresas extends Component {


    render = () => {

        const data = [

            { name:'Mecânica', value:'100'},
            { name:'Oficina', value:'70'},
            { name:'Barbearia', value:'20'},
            { name:'Salão', value:'10'}

        ];

        const data_two = [
            { name:'Mecânica', value:'100'},
            { name:'Oficina', value:'70'},
            { name:'Barbearia', value:'20'},
            { name:'Salão', value:'10'}
        ];

        const data_three = [
            { name:'Mecânica', value:'100'},
            { name:'Oficina', value:'70'},
            { name:'Barbearia', value:'20'},
            { name:'Salão', value:'10'}
        ];

        return(
            <>
                <Header icon={<Hamburguer/>} title={"Dashboard"}></Header>
                <Drawer></Drawer>
                <div style={{marginBottom:64}}>
                    <Carousel></Carousel>
                </div>
                <div className={'dashboard-container'}>
                    <Table data={data}
                           name={'Termo'}
                           data_name={'Qtd.'}>
                    </Table>
                    <Table data={data_two}
                           name={'Hashtag'}
                           data_name={'Qtd.'}>
                    </Table>
                </div>
                <div className={'dashboard-container'}>
                    <Table data={data_three}
                           name={'Categoria'}
                           data_name={'Posição'}>
                    </Table>
                    <div style={{display:'flex', flexDirection:'column', height:'100%', justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Illustration width={400} height={200}>
                        </Illustration>
                    </div>
                </div>

            </>
        )
    }
}

export default Empresas;