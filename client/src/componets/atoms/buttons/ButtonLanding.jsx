import React from 'react';
import styleButton from './ButtonLanding.module.scss';

const ButtonLanding = () => {
    return (
        <div className={styleButton.btn}>
            <button>INGRESAR</button>
        </div>
    );
};

export {ButtonLanding};