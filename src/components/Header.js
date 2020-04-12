import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Header extends Component {

    openDrawer = () => {
        const {  openDrawer  } = this.props;        
        if(window.location.pathname == "/login"){
            
            return;
        }
        openDrawer(true);
    }


    hasDrawer = () => {
        const { drawer } = this.props;
        if(drawer){
            return drawer;
        }else{
            return false;
        }
    }

    render = () => {
        const { icon, title } = this.props;
        return(<div  className={'header'}>
                    <div onClick ={this.hasDrawer() ? this.openDrawer : () => {}} className={"header-icon-container"}>
                        {icon}
                    </div>  
                    <div className={"header-title"}>
                        <p className={"header-title-text"}>
                            {title}
                        </p>
                    </div>
                </div>)
    }
}


const mapDispatchToProps = actions;
const mapStateToProps = (state) => ({
    drawer_open:state.drawer_open
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);