import React, { Component } from 'react';
import Illustration from '../assets/images/drawericon'; 
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Drawer extends Component {

    constructor(props){
        super(props);
    }

    state = {isInside:false}

    componentDidMount = () => {

        const { openDrawer } = this.props;
        
        document.onmousedown = (event) => {
            
            const { drawer_open}  = this.props;
            const drawerRef = this.drawerRef;
            const clickedNode  = event.target;

            if(drawerRef !== clickedNode && !drawerRef.contains(clickedNode)  && drawer_open){
                openDrawer(false);
            }
        }
    }

    isDrawerOpen =  () => {
        const {drawer_open }  = this.props;
        if(drawer_open == undefined){
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
                        <Illustration></Illustration>
                </div>
                <div className={"drawer-body-container"}>
                    <div className={"drawerOption"}> Início </div>
                    <div className={"drawerOption"}> Login </div>
                    <div className={"drawerOption"}> Cadastro </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);  ;
