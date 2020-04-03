import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import  * as actions from '../redux/actions';
import { withRouter } from 'react-router';

class Button extends Component {

    state = {label:""}

    constructor(props){
        super(props);
    }
    componentDidMount = () => {
        console.log(this.props.history);
    }

    submit = () => {

        //Recebe o email e a senha definida na store
        const { email, password } = this.props;

        //Recebe a buttonAction do componente pai
        const { setLoginLabel } = this.props;

        //Atribui uma string vazia caso os valores da senha e email sejam 
        //null ou undefined
        let email_val = email ? email : "";
        let passwd = password ? password : "";

        const data  = {
            email:   email_val,
            password:  passwd
        }

        axios.post('http://localhost:9000/login/auth', data).then(res => {    
            this.props.history.replace("/home", "/login/auth");
        }).catch(err => {
            
            if(err && err.response){
                const label = err.response.data.error;
                setLoginLabel(label);
            }            
        })
    }

    render = () => {
        const { title } = this.props;
        return(
            <>
            <div className={"submit-button-container"}>
                <button onClick={this.submit} type="text" >{title}</button>
            </div>
            </>
        )
    }
}

//Realização de uma conexão entre o redux e o componente
const   mapStateToProps  =  ( state ) => {
    return { email:state.email, password:state.password }
}

const mapDispatchToProps = actions;

const AppToReduxConnection = connect(mapStateToProps, mapDispatchToProps)(Button);


//Realização da conexão deste componente com o history 
export default withRouter(AppToReduxConnection);