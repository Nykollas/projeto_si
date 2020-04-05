import React, { Component } from 'react';


class PlusIcon extends Component {

    constructor(props){
        super(props);
    }

    render = () => {

        const { onClick } =this.props;

        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path onClick={onClick} style={{cursor:'pointer'}} d="M30 12.5H17.5V0H12.5V12.5H0V17.5H12.5V30H17.5V17.5H30V12.5Z" fill="#3988FF" />
            </svg>
        )
    }
}

export default PlusIcon;