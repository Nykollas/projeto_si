import React, { Component } from 'react';
import EmpresaData from '../components/EmpresaData';
import Hashtags from '../components/Hashtags';

import EditButton from '../assets/images/editbutton';
import PlusIcon from '../assets/images/plus';

import * as actions from '../redux/actions';

import { connect } from 'react-redux';

class EmpresaCard extends Component {

    constructor(props){
        super(props);
    }

    onClick = () => {
        const { setUpdate, index } = this.props;

        

       setUpdate(true, index);
        
    }



    render = () => {

        const { data } = this.props;

        return (
            <div className={'empresa-card-container'}>
                <div className={'empresa-col'}>
                    <div className={'empresa-row'}>
                        <img src={'https://www.w3schools.com/w3css/img_lights.jpg'}></img>
                    </div>
                    <div className={'empresa-row'}>
                        <Hashtags></Hashtags>
                    </div>
                </div>
                <div className={'empresa-col'}>
                    <div className={'empresa-row'}>
                        <EmpresaData data={data}></EmpresaData>
                    </div>
                    <div className={'empresa-row'}>
                        <div className={'empresa-category-container'}>
                            <p>Categoria</p>
                        </div>
                        <EditButton onClick={ this.onClick } height={ 160 } widht={ 150 }></EditButton>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = actions;

const mapStateToProps= (state) => ({empresas:state.empresas});


export default connect(mapStateToProps, mapDispatchToProps)(EmpresaCard);