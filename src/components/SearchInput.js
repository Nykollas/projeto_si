import React, { Component } from 'react';
import SearchIcon from '../assets/images/searchicon';




class SearchInput extends Component {
    render  = () => {
        return(
            <div className={'search-input-container'}>
                <input type={'text'} placeholder={'Nome da empresa, categoria, hashtag'}></input>
                <div className={"search-icon-container"}>
                    <SearchIcon></SearchIcon>
                </div>
            </div>
        )
    }
}

export default SearchInput;