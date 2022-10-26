import React from 'react';
import styleInput from './Input.module.scss';
const Input = () => {
    return (
        <div className={styleInput.textInputWrapper}>
            <input className={styleInput.textInput} type="text"/>
        </div>
    );
};

export default Input;