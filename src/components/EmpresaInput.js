import React, { Component } from 'react';

class Input extends Component {
    render = () => {

        const { placeholder, inputHandler, value, type }  = this.props;

        return(
            <div className={"empresa-input-container"}>
                <input onChange={inputHandler} type={type ? type : 'text'} value={ value } placeholder={placeholder}></input>
            </div>
        )
    }
}


export default Input;