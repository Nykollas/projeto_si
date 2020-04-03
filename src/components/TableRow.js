import React, { Component }  from 'react';

class TableRow extends Component {
    render = () => {
        const { name, value, header} = this.props;
        const className =  header ? 'table-header' : 'table-row';
        return(
            <div className={ className }>
                <div className={'table-column'}>
                    <p className={'blue-text'}>{name}</p>
                </div>
                <div className={'table-column'}>
                    <p className={'blue-text'}>{value}</p>
                </div>
            </div>
        )   
    }
}

export default TableRow;