import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Drawer from '../components/Drawer';
import EmpresasRow from '../components/EmpresasRow';
import SearchInput from '../components/SearchInput';
import Plus from '../assets/images/plus';
import ModalSet from '../components/ModalSet.js';
import ModalShow from '../components/ModalShow';
import ModalAdd from '../components/ModalAdd';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import config from '../config';

class Empresas extends Component {
    getData = async () => {

        const { addEmpresa, cleanEmpresas, empresas } = this.props;

        const requestConfig = {
            method: 'GET',
            headers: { "Cache-Control": "no-cache" }
        }

        await fetch(config.host + "/empresas/list", requestConfig).then(async (res) => {
            cleanEmpresas();
            res.json().then(data => {
                const empresas_data = data.empresas;
                empresas_data.map(empresa => {
                    empresa = {
                        _id: empresa._id,
                        name: empresa.name,
                        email: empresa.email,
                        street: empresa.street,
                        place: empresa.place,
                        city: empresa.city,
                        uf: empresa.uf,
                        category: empresa.category,
                        tel: empresa.tel,
                        img:empresa.img,
                        hashtags:empresa.hashtags
                    }
                    addEmpresa(empresa);
                })
            })
        })
    }

    splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
            chunks.push(arr.slice(i, i += len));
        }
        return chunks;
    }

    add = () => {
        const { openModal, data } = this.props;
        document.getElementsByTagName('body')[0].className = "scroll-stopped";
        openModal({
            modal: true,
            modalType: 3,
            data:data
        })
    }

    componentDidMount = () => {
        this.getData()
    }

    render = () => {

        const { empresas, modal, modalType } = this.props;

        return (
            <>
                <Header drawer={true} icon={<Hamburguer />} title={"Empresas"}></Header>
                <div className={'search-container'}>
                    <SearchInput></SearchInput>
                    <Plus onClick={this.add}></Plus>
                </div>
                <Drawer></Drawer>
                <div className={"empresas"}>
                    {empresas && this.splitArrayIntoChunksOfLen(empresas.reverse(), 2).map((value, index, arr) => {

                        return <EmpresasRow empresasRef={this} empresas={value} index={index}></EmpresasRow>
                    })
                    }
                </div>
                {modal ? (modalType == 1 ?
                             <ModalShow empresasRef={this}></ModalShow> 
                            : 
                            (modalType == 2 ? 
                                <ModalSet empresasRef={this} ></ModalSet> 
                                : <ModalAdd empresasRef={this}></ModalAdd>)) 
                                : <></>}
            </>
        )

    }
}

const mapStateToProps = state => ({
    empresas: state.empresas,
    modal: state.modal,
    modalType: state.modalType,
    data:state.data
})

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Empresas);