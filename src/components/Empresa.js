import React, { Component } from 'react';
import EmpresaCard from './EmpresaCard';
import EmpresaCardEdit from './EmpresaCardEdit';
import EmpresaCardAdd from './EmpresaCardAdd';
import { connect } from 'react-redux';

class Empresa extends Component {

    constructor(props){
        super(props);
    }

    state = {edit:false}
    render = () => {

        const { edit } = this.state;
        const { adding, index,data } = this.props;
        console.log(adding);
        return(
            <>
            {adding && index == 0 ? 
                    <EmpresaCardAdd></EmpresaCardAdd>
                    :
                (!edit ?
                    <EmpresaCard data={data} parentComponent={ this }>
                    </EmpresaCard>
                    :
                    <EmpresaCardEdit data={data} parentComponent={ this } >
                    </EmpresaCardEdit>
                )
            }
            </>
               
        )   
    }
}


const mapStateToProps = state => ({
    adding: state.adding
})


export default connect(mapStateToProps)(Empresa);