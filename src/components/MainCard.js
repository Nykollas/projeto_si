import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainCard extends Component {

    render = () => {
        const { title, children, submitButton, login_label  } = this.props;
        return(
            <div className={'main-container'}>
                <div className={'card-container'}>
                    <div className={"card-title-container"}>
                            <p className={'card-title-text'}>{title}</p>
                    </div>
                    <div className={"inputs-container"}>
                        {children}
                    </div>
                    <div className={'card-button-container'}>
                        {submitButton}
                    </div>
                    <p>
                        {login_label}
                    </p>
                </div>
            </div>
        )
    }
} 

//Conectando estados com as props detes componente

const mapStateToProps = state => ({
    login_label:state.login_label
})

export default connect(mapStateToProps)(MainCard);
