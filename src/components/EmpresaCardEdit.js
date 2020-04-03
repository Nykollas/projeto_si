import React, { Component } from 'react';
import EmpresaForm from './EmpresaForm';
import Hashtags from './Hashtags';

import EditButton from '../assets/images/editsave';



class EmpresaCard extends Component {
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
                    </div>
                    <div className={'empresa-row'}>
                        <div className={'empresa-category-container'}>
                            <p>Categoria</p>
                        </div>

                        <EditButton></EditButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmpresaCard;