import React, { Component } from 'react';
import Header from '../components/Header';
import Hamburguer from '../assets/images/hamburguer';
import Drawer from '../components/Drawer';
import UserDataEdit from '../components/UserDataEdit';
import UserData from '../components/UserData';
import { connect } from 'react-redux';
import config from  '../config';
import * as actions from '../redux/actions'

class Users extends Component {

    state = {
        updating: false,
        data:null
    }

    getUserData = () => {


        fetch(config.host+'/users/user_show?id=5e9cc3ba9bcf495004b1df8f').then(res => {
            res.json().then((data => {
                this.setState({
                    data
                })
            }))
        })  
    }

    componentDidMount = () => {
        this.getUserData();
    }
    render = () => {

        
        const { updating, data } = this.state;

        return (
            <>
                <Header drawer={true} icon={<Hamburguer />} title={"Empresas"}></Header>
                <Drawer></Drawer>
                {updating  ?
                    (data ? <UserDataEdit userRef={this} data={data} /> : <></>)
                    :
                    (data ? <UserData userRef={this} data={data}></UserData> : <></> )
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    state: state
})

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Users);