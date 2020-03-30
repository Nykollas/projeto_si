import React, { Component } from 'react';
import SaveButton from '../assets/images/editsave';
import ConfigIcon from '../assets/images/configicon';
import EmpresaInput from '../components/EmpresaInput';


class UserData extends Component {

    constructor(props){
        super(props);
    }

    render  = () => {
        const { name, email, password } = this.props;
        return(<div className={'user-data-container'}>
                <div className={'user-data-col'}>
                    <p className={'user-data-text'}>Eitar dados do usuário</p>
                    <EmpresaInput placeholder={'Nome'}></EmpresaInput>
                    <EmpresaInput placeholder={'E-mail'}></EmpresaInput>
                    <EmpresaInput placeholder={'Senha'}></EmpresaInput>
                    <EmpresaInput placeholder={'Nova senha'}></EmpresaInput>
                </div>
                <div className={'user-data-col'}>
                        <div className={'user-data-row row-horizontal-end'} 
                             style={{paddingRight:64, paddingTop:32, alignItems:'flex-start'}}>
                                <ConfigIcon height = { 50 }  width = { 50 }></ConfigIcon>
                        </div>
                        <div className={'user-data-row row-horizontal-end'}>
                                <SaveButton height={150} width={159}></SaveButton>
                        </div>
                </div>
        </div>);
    }
}

export default UserData;