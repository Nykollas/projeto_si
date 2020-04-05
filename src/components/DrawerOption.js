import React, { Component } from 'react';
import { withRouter } from 'react-router';

class DrawerOption extends Component {

    navigate = () => {
        const {navigateTo} = this.props;
        console.log(navigateTo);

        this.props.history.replace(navigateTo, window.location.pathname);
    }

    render = () => {

        const {label} = this.props;



        return(
            <div onClick={this.navigate} className={"drawer-option"}>
                <p>{label}</p> 
            </div>
        );
    }
}

export default withRouter(DrawerOption);