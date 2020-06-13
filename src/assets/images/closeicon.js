import React, { Component } from 'react';

class CloseIcon extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const { size, onClick } = this.props;

        return (
            <div onClick={onClick} style={{marginBottom:12}}>
                <svg  height={ size } width={ size } viewBox={ "0 0 24 32" } fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path style={{ cursor: 'pointer', marginBottom:36 }} d="M24 21.6332L15.685 12.98L23.885 4.24984L20.188 0.352783L11.976 9.12089L3.666 0.474006L0 4.33838L8.321 13.0243L0.115 21.7871L3.781 25.6515L12.018 16.8834L20.303 25.5303L24 21.6332Z" fill="#3988FF" />
                </svg>
            </div>
        )
    }
}

export default CloseIcon;