import React from 'react';
import styleSearch from './Search.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = ({prueba}) => {

    return (
        <div className={styleSearch.div_search}>
            <FontAwesomeIcon className={styleSearch.iconSearch} icon={faMagnifyingGlass} onClick={prueba}/>
        </div>
    );
};

export default Search;