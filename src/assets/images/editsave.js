import React, { Component } from 'react';


class EditSave extends Component {


    render = () => {

        const { height, width, onClick } = this.props;

        return (
            <svg onClick={onClick} width="182" height="171" viewBox="0 0 182 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i)">
                    <path style={{cursor:'pointer'}}  fill-rule="evenodd" clip-rule="evenodd" d="M0 171H170C176.627 171 182 165.627 182 159V0C167.596 44.9146 111.03 141.995 0 171Z" fill="#3988FF" />
                </g>
                <path style={{cursor:'pointer'}} d="M157.654 115.407L138.375 135.757L129.345 126.941L123 133.479L138.375 148.833L164 121.943L157.654 115.407Z" fill="white" />
                <defs>
                    <filter id="filter0_i" x="0" y="0" width="182" height="175" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
                    </filter>
                </defs>
            </svg>

        )
    }
}

export default EditSave;