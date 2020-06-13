import React, { Component } from 'react';



class Hashtags extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { hashtags } = this.props;
        
        return (<div className={'hashtags-container'}>
            {hashtags ? hashtags.map((value) => {
                console.log(value);
                return (<div className={'hashtag'}>
                    <p className={'hashtag-text'}>{value.name}</p>
                </div>);
            }):<></>}
            
        </div>);
    }
}

export default Hashtags;