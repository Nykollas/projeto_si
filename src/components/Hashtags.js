import React, { Component } from 'react';



class Hashtags extends Component {
    render = () => {

        const data = [
            'hashtag',
            'hashtag',
            'hashtag',
            'hashtag',
        ]

        return (<div className={'hashtags-container'}>
            {data.map((value) => {
                return (<div className={'hashtag'}>
                    <p className={'hashtag-text'}>{value}</p>
                </div>);
            })}
        </div>);
    }
}

export default Hashtags;