import React, { Component } from 'react';


class EmpresaData extends Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        const { data } = this.props
        return (
            <div className={'empresa-text-container'}>
                <div className={'empresa-data-text-container'}>
                    <p>{data.name ? data.name : "N/A"}</p>
                </div>
                <div className={'empresa-data-text-container'}>
                    <p>{data.tel ? data.tel : "N/A"}</p>
                </div>
                <div className={'empresa-data-text-container'}>
                    <p>{data.email ? data.email : "N/A"}</p>
                </div>
                <div className={'empresa-data-text-container'}>
                    <p>{data.street ? data.street : "N/A"}</p>
                </div>
                <div className={'empresa-data-text-container'}>
                    <p>{data.place ? data.place : "N/A"}</p>
                </div>
                <div className={'empresa-data-text-container'}
                    style={{ flexDirection: 'row', display: 'flex' }}>
                    <p>{data.city ? data.city : "N/A"}</p>
                    <p>,</p>
                    <div style={{width:12}}></div>
                    <p>{data.uf ? data.uf : "N/A"}</p>
                </div>
            </div>
        );
    }
}

export default EmpresaData;