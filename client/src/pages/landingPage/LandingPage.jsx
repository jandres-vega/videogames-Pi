import React from 'react';
import {ButtonLanding}from '../../componets/atoms/buttons/ButtonLanding';
import {Link} from 'react-router-dom';
import styleLanding from './LandingPage.module.scss';

const LandingPage = () => {
    return (
        <div >
            <div className={styleLanding.center}>
                <Link to={'/home'}>
                    <ButtonLanding />
                </Link>
            </div>
        </div>
    );
};

export {LandingPage};