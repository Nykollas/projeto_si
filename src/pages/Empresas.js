import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Drawer from '../components/Drawer';
import Empresa from '../components/Empresa';
import SearchInput from '../components/SearchInput';
import Plus from '../assets/images/plus';

import { connect } from 'react-redux';

import * as actions from '../redux/actions'

class Empresas extends Component {

    getData = async () => {
        
        const { addEmpresa, empresas, cleanEmpresas } = this.props;
        cleanEmpresas();

        const requestConfig = {
            method:'GET',
            headers:{"Cache-Control":"no-cache"}
        }

        fetch("https://backend-si.herokuapp.com/empresas/list", requestConfig).then((res) => {
            res.json().then(data => {
                const empresas_data = data.empresas;
            
                empresas_data.map( empresa => {
                    
                    empresa = {
                        _id:empresa._id,
                        name: empresa.name,
                        email: empresa.email,
                        street: empresa.street,
                        place: empresa.place,
                        city: empresa.city,
                        uf: empresa.uf,
                        category: empresa.category,
                        tel:empresa.tel,
                    }

                    addEmpresa(empresa);
                })
            })
        })
    }


    add = () => {
        const { adding, setAdd, addEmpresa } = this.props;
        setAdd(true);
        if(!adding){

            const empresa = {
                name: "",
                email: "",
                street: "",
                place: "",
                city: "",
                uf: "",
                category: "",
                tel:"",
            }

            addEmpresa(empresa);
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    render = () => {

        const { empresas } = this.props;

        return (
            <>
                <Header drawer={true} icon={<Hamburguer />} title={"Empresas"}></Header>
                <div className={'search-container'}>
                    <SearchInput></SearchInput>
                    <Plus onClick={this.add}></Plus>
                </div>
                <Drawer></Drawer>
                {empresas && empresas.reverse().map((value, index, arr) => {
                     return <Empresa empresasRef={this}  data={value} index={index}></Empresa>
                    })
                }
            </>
        )

    }
}

const mapStateToProps = state => ({
    adding: state.adding,
    empresas: state.empresas
})

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Empresas);