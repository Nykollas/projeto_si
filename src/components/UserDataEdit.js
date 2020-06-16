import React, { Component } from 'react';
import SaveButton from '../assets/images/editsave';
import ConfigIcon from '../assets/images/configicon';
import EmpresaInput from '../components/EmpresaInput';
import config from '../config';
var bcrypt = require('bcryptjs')


class UserData extends Component {



        state = {
                userName: null,
                userEmail: null,
                actualPassword: null,
                newPassword: null,
                userId: "5e9cc3ba9bcf495004b1df8f"
        }

        handleName = (e) => {
                this.setState({
                        userName: e.target.value
                })
        }

        handleEmail = (e) => {
                this.setState({
                        userEmail: e.target.value
                })
        }

        handlePassword = (e) => {
                this.setState({
                        password: e.target.value
                })
        }

        handlePasswordConfirmation = (e) => {
                this.setState({
                        newPassword: e.target.value
                })
        }
        componentDidMount = () => {
                const { data } = this.props;
                const { name, email } = data;
                this.setState({
                        userName: name,
                        userEmail: email
                })
        }


        hashPassword = (password) => {
                if (password == null) {
                        return
                }
                return bcrypt.hashSync(password, 10);
        }

        updateUser = () => {
                const {
                        userName,
                        userEmail,
                        actualPassword,
                        newPassword,
                        userId
                } = this.state;

                let hashedPassword = this.hashPassword(actualPassword);
                let hashedNewPassword = this.hashPassword(newPassword);

                let data = {
                        userName,
                        userEmail,
                        hashedPassword,
                        hashedNewPassword,
                        userId
                }
                const requestConfig = {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data),
                }
                fetch(config.host + '/users/user_update', requestConfig).then((res) => {

                        res.json().then(data => {
                                if (res.status == 400) {
                                        alert(data.message)
                                }
                        })
                })
        }

        render = () => {
                const { userName, userEmail, actualPassword, newPassword } = this.state;

                return (<div className={'user-data-container'}>
                        <div className={'user-data-col'}>
                                <p className={'user-data-text'}>Editar dados do usuário</p>
                                <EmpresaInput value={userName} inputHandler={this.handleName} placeholder={'Nome'}></EmpresaInput>
                                <EmpresaInput value={userEmail} inputHandler={this.handleEmail} placeholder={'E-mail'}></EmpresaInput>
                                <EmpresaInput value={actualPassword} type={'password'} inputHandler={this.handlePassword} placeholder={'Senha'}></EmpresaInput>
                                <EmpresaInput value={newPassword} type={'password'} inputHandler={this.handlePasswordConfirmation} placeholder={'Nova senha'}></EmpresaInput>
                        </div>
                        <div className={'user-data-col'}>
                                <div className={'user-data-row row-horizontal-end'}
                                        style={{ paddingRight: 64, paddingTop: 32, alignItems: 'flex-start' }}>
                                        <ConfigIcon height={50} width={50}></ConfigIcon>
                                </div>
                                <div className={'user-data-row row-horizontal-end'}>
                                        <SaveButton onClick={this.updateUser} height={150} width={159}></SaveButton>
                                </div>
                        </div>
                </div>);
        }
}

export default UserData;