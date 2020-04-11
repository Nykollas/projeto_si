import React, { Component } from 'react';
import EmpresaCard from './EmpresaCard';
import EmpresaCardEdit from './EmpresaCardEdit';
import EmpresaCardAdd from './EmpresaCardAdd';
import { connect } from 'react-redux';

class Empresa extends Component {

    constructor(props){
        super(props);
    }
    render = () => {  
        const {editing, adding, editIndex, index, data, empresasRef } = this.props;
        
        return(
            <>
            {adding && index == 0 ? 
                    <EmpresaCardAdd empresasRef={empresasRef} index={index}></EmpresaCardAdd>
                    :
                (editing ?
                     (editIndex == index ?
                        <EmpresaCardEdit index={index} data={data} parentComponent={ this } ></EmpresaCardEdit>
                     : 
                     <EmpresaCard index={index} data={data} parentComponent={ this }></EmpresaCard>)
                     :
                    <EmpresaCard index={index} data={data} parentComponent={ this }></EmpresaCard>)
            }
            </>   
        )   
    }
}


const mapStateToProps = state => ({
    adding: state.adding,
    editing: state.editing,
    editIndex: state.editIndex
})


export default connect(mapStateToProps)(Empresa);