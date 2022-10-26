import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styleIcon from './Icon.module.scss';
const Icon = () => {
    return (
        <React.Fragment>
            <FontAwesomeIcon className={styleIcon.iconButton} icon={faBars}/>
        </React.Fragment>
    );
};

export {Icon};