import React, { Component } from 'react';

class Input extends Component {
    render = () => {

        const { placeholder }  = this.props;

        return(
            <div className={"card-input-container"}>
                <input type={"text"} placeholder={placeholder}></input>
            </div>
        )
    }
}


export default Input;