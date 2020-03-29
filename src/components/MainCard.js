import React, { Component } from 'react';
import Button from '../components/Button';

class MainCard extends Component {
    constructor(props){
        super(props)
    }

    render = () => {

        const { title, children, submitButton  } = this.props;
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
                </div>
            </div>
        )
    }
} 

export default MainCard;