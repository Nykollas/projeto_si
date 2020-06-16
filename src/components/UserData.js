import React, { Component } from 'react';
import EditButton from '../assets/images/editbutton';
import ConfigIcon from '../assets/images/configicon';

class UserData extends Component {

    constructor(props){
        super(props);
    }

    setUpdate = () => {
        const { userRef } = this.props;
        userRef.setState({
            updating:true
        })
    }

    render  = () => {
        const { data } = this.props;
        const { name, email } = data;
        return(<div className={'user-data-container'}>
                <div className={'user-data-col'}>
                    <div className={'user-data-row'}>
                        <p className={'user-data-text'}>{name}</p>
                    </div>
                    <div className={'user-data-row'}>
                        <p className={'user-data-text'}>{email}</p>
                    </div>
                </div>
                <div className={'user-data-col'}>
                        <div className={'user-data-row row-horizontal-end'} style={{paddingRight:64, paddingTop:32}}>
                                <ConfigIcon height = { 50 }  width = { 50 }></ConfigIcon>
                        </div>
                        <div className={'user-data-row row-horizontal-end'}>
                                <EditButton  onClick={this.setUpdate} height={150} width={159}></EditButton>
                        </div>
                </div>
        </div>);
    }
}

export default UserData;