import React from 'react';
import styleSearch from './Search.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <React.Fragment>
            <FontAwesomeIcon className={styleSearch.iconSearch} icon={faMagnifyingGlass} />
        </React.Fragment>
    );
};

export default Search;