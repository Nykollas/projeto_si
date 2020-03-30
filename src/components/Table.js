import React, { Component } from 'react';
import TableRow from '../components/TableRow';

class Table extends Component {

    constructor(props){
        super(props);
    }

    render = () => {

        const { data,
                name,
                data_name,
                title } = this.props;

        return(
            <div className={'table-container'}>
                <p>{title}</p>
                <div className={'table'}>
                    <TableRow header={true}
                              name={name}
                              value={data_name}>
                    </TableRow> 
                    {data.map((value) => {
                        return <TableRow name={value.name}
                                  value={value.value}>
                                </TableRow>
                    })}
                </div>
            </div>
        )
    }
}

export default Table;