import React, { Component } from 'react';
import EmpresaForm from './EmpresaForm';
import Hashtags from './Hashtags';

import EditButton from '../assets/images/editsave';
import CloseIcon from '../assets/images/closeicon';

import * as actions from '../redux/actions';

import { connect } from 'react-redux';

class EmpresaCardAdd extends Component {

    constructor(props){
        super(props);
    }

    onClick = () => {
        const { parentComponent } = this.props;
        
        parentComponent.setState((previousState) => {
            return {edit:!previousState.edit}
        });
        
    }

    cancel = () => {
        const {removeEmpresa, setAdd } = this.props;
        setAdd(false);
        removeEmpresa();
    }

    render = () => {        

    

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
                        <EmpresaForm></EmpresaForm>
                        <CloseIcon onClick={this.cancel} size={120}></CloseIcon>
                    </div>
                    <div className={'empresa-row'}>
                        <div className={'empresa-category-container'}>
                            <p>Categoria</p>
                        </div>
                        <EditButton  onClick={ this.onClick } height={140} width={150 }></EditButton>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = actions;


const mapStateToProps = (state) => {
    return { state:state}
}


export default connect(mapStateToProps, mapDispatchToProps)(EmpresaCardAdd);