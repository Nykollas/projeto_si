import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Carousel from '../components/Carousel';
import Table from '../components/Table';
import Illustration from '../assets/images/illustration';
import Drawer from '../components/Drawer';
import { connect } from 'react-redux';
import config from '../config';
import * as actions from '../redux/actions'
class Dashboard extends Component {

    componentDidMount = () => {
        const { cleanCredentials } = this.props;
        cleanCredentials();
        this.getData();
    }

    state = {
        data: null
    }

    getData = async () => {
        const requestConfig = {
            method: 'GET',
            headers: { "Cache-Control": "no-cache" }
        }
        await fetch(config.host + "/empresas/list", requestConfig).then(async (res) => {
            res.json().then(data => {
                this.setState({
                    data: data.empresas
                })

            })
        })
    }

    render = () => {
        const { data } = this.state;
        const data_one = [
            { name: 'Mecânica', value: '100' },
            { name: 'Oficina', value: '70' },
            { name: 'Barbearia', value: '20' },
            { name: 'Salão', value: '10' }
        ];
        const data_two = [
            { name: 'Mecânica', value: '100' },
            { name: 'Oficina', value: '70' },
            { name: 'Barbearia', value: '20' },
            { name: 'Salão', value: '10' }
        ];
        const data_three = [
            { name: 'Mecânica', value: '100' },
            { name: 'Oficina', value: '70' },
            { name: 'Barbearia', value: '20' },
            { name: 'Salão', value: '10' }
        ];

        return (
            <>
                <Header drawer={true} icon={<Hamburguer />} title={"Dashboard"}></Header>
                <Drawer></Drawer>
                <div style={{ marginBottom: 64 }}>
                    <Carousel data={data ? data : []}></Carousel>
                </div>
                <div className={'dashboard-container'}>
                    <Table data={data_one}
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
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Illustration width={400} height={200}>
                        </Illustration>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
