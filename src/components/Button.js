import React, { Component } from 'react';



class Button extends Component {
    render = () => {
        const { title } = this.props;
        return(
            <div className={"submit-button-container"}>
                <button type="text" >{title}</button>
            </div>
        )
    }
}

export default Button;