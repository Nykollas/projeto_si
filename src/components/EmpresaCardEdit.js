import React, { Component } from 'react';
import EmpresaForm from './EmpresaForm';
import Hashtags from './Hashtags';

import EditButton from '../assets/images/editsave';

import TrashIcon from '../assets/images/trash';

import * as actions from '../redux/actions';

import { connect } from 'react-redux';



class EmpresaCardEdit extends Component {

    constructor(props) {
        super(props);
    }

    validateData = (data) => {

        return true;

    }

    onClick = () => {
        const { update_data,
                updateEmpresa,
                setUpdate,
                index
              } = this.props;

        const isValid = this.validateData(update_data);
        
        if (isValid) {
            //updateEmpresa(update_data, index);

            const requestConfig = {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(update_data),

            }

            fetch("http://localhost:9000/empresas/update", requestConfig).then(res => {

                res.json().then(response => {

                    console.log(response)

                }).catch(err => {

                    console.log(err);

                });

            }).then(() => {

                setUpdate(false);

            })

        }
    }

    delete = () => {
        const { removeEmpresa, index } = this.props;
        removeEmpresa(index);
    }


    componentDidMount = () => {
        const { data, setUpdateData } = this.props;
        
        setUpdateData(data);
    }

    render = () => {

        const { data } = this.props;

        return (
            <div className={'empresa-card-container'}>
                <div className={'empresa-col'}>
                    <div className={'empresa-row'}>
                        <img alt={"Empresa"} src={'https://www.w3schools.com/w3css/img_lights.jpg'}></img>
                    </div>
                    <div className={'empresa-row'}>
                        <Hashtags></Hashtags>
                    </div>
                </div>
                <div className={'empresa-col'}>
                    <div className={'empresa-row'}>
                        <EmpresaForm data={data}></EmpresaForm>
                        <TrashIcon size={120}></TrashIcon>
                    </div>
                    <div className={'empresa-row'}>
                        <div className={'empresa-category-container'}>
                            <p>Categoria</p>
                        </div>
                        <EditButton onClick={this.onClick} height={140} width={150}></EditButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = actions;


const mapStateToProps = (state) => {
    return {
        add_data: state.add_data,
        update_data: state.update_data
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmpresaCardEdit);