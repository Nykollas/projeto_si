import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
    }

    render = () => {

        const { icon, title } = this.props;

        return(<div className={'header'}>
                    <div className={"header-icon-container"}>
                        {icon}
                    </div>  
                    <div className={"header-title"}>
                        <p className={"header-title-text"}>
                            {title}
                        </p>
                    </div>
                </div>)
    }
}

export default Header;