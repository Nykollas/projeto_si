import React, { Component } from 'react';


class Input extends Component {

    handleInputChange = ( event ) => {
        const { inputAction } = this.props;
        inputAction( event.target.value );
    }

    render = () => {
        const { placeholder }  = this.props;
        return(
            <div className={"card-input-container"}>
                <input onChange={ this.handleInputChange } type={ "text" } placeholder={ placeholder }></input>
            </div>
        )
    }
}


export default Input;