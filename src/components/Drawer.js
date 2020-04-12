import React, { Component } from 'react';
import Illustration from '../assets/images/drawericon'; 
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import { withRouter } from 'react-router';

import DrawerOption from './DrawerOption';

class Drawer extends Component {

    constructor(props){
        super(props);
    }

    state = {isInside:false}

    componentDidMount = () => {
        
        const { openDrawer, history } = this.props;
        
        

        document.onmousedown = (event) => {
            //Previne que o drawer abra na página de login
            

            const { drawer_open }  = this.props;
            const drawerRef = this.drawerRef;
            const clickedNode  = event.target;

            if(drawerRef !== clickedNode && !drawerRef.contains(clickedNode)  && drawer_open){
                openDrawer(false);
            }
        }
    }
    

    isDrawerOpen =  () => {
        const {drawer_open, history }  = this.props;
        
        if(drawer_open == undefined){
            return "";
        }
        const { pathname } = history.location;
        if(pathname == "/login"){
            return "";
        }
        
        const isDrawerOpen =  drawer_open ? "open-drawer" : "close-drawer"; 
      
        return isDrawerOpen;
    }

    render = () => {

        return(
            <div  
                  ref ={comp => {return this.drawerRef = comp}}
                  className={ 'drawer-container '+ this.isDrawerOpen()  }>
                <div className="drawer-header-container">
                        <Illustration height={200} width={200}></Illustration>
                </div>
                <div className={"drawer-body-container"}>
                    <DrawerOption navigateTo="/home" label={ "Home" }></DrawerOption>
                    <DrawerOption navigateTo="/empresas" label={ "Empresas" }></DrawerOption>
                    <DrawerOption navigateTo="/user" label={ "Meus dados" }></DrawerOption>
                    <DrawerOption navigateTo="/login" label={ "Sair" }></DrawerOption>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => 
    ({
        drawer_open:state.drawer_open
    });


const mapDispatchToProps = actions;

const reduxConnected = connect(mapStateToProps, mapDispatchToProps)(Drawer); 

export default withRouter(reduxConnected);
