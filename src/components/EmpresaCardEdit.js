import React, { Component } from 'react';
import EmpresaForm from './EmpresaForm';
import Hashtags from './Hashtags';

import EditButton from '../assets/images/editsave';

import TrashIcon from '../assets/images/trash';

class EmpresaCardEdit extends Component {

    constructor(props){
        super(props);
    }

    onClick = () => {
        const { parentComponent } = this.props;
        
        parentComponent.setState((previousState) => {
            return {edit:!previousState.edit}
        });
        
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
                        <EditButton  onClick={ this.onClick } height={140} width={150 }></EditButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmpresaCardEdit;