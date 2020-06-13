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
        const { data } = this.props;
        
        const { openModal } = this.props;
        document.getElementsByTagName('body')[0].className = "scroll-stopped";
        openModal({modal:true, modalType:2, data:data});
    }

    show = () => {
        const { data } = this.props;
        
        const { openModal } = this.props;
        document.getElementsByTagName('body')[0].className = "scroll-stopped";
        openModal({ modal:true, modalType:3, data:data });
    }

    render = () => {
        const { data } = this.props;
        console.log(data);
        
        return (
            <div className={'empresa-card-container'}>
                <div className={'empresa-col'}>
                    <div onClick={this.show} className={'empresa-row'}>
                        <img src={data.img}></img>
                    </div>
                    <div onClick={this.show} className={'empresa-category-container'}>
                            <p>{data.category}</p>
                    </div>
                    <div className={'empresa-row'}>
                        <Hashtags hashtags={data.hashtags}></Hashtags>
                        <div style={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end'}}>
                            <EditButton onClick={ this.onClick } height={ 160 } widht={ 150 }></EditButton>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
const mapDispatchToProps = actions;



export default connect(null, mapDispatchToProps)(EmpresaCard);