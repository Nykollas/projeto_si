import React, { Component } from 'react';


class Input extends Component {

    constructor(props){
        
        super(props);
    }

    render = () => {
        const { placeholder, inputHandler }  = this.props;
    
        return(
            <div className={"card-input-container"}>
                <input onChange={inputHandler}  type = { "text" } placeholder = { placeholder }></input>
            </div>
        )
    }
}


export default Input;