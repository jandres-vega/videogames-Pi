import React from 'react';
import {Link} from "react-router-dom";
import styleHeader from './Header.module.scss';
import Search from "../../molecules/search/Search";
import {Icon} from "../../atoms/icons/Icon";
import Input from "../../atoms/inputs/Input";

let menuOptions = [
    {to: '/home', option: 'Home'},
    {to: '/create-videoGame', option: 'Crear VideoJuego'},
    {to: '/about', option: 'About'},
    {to: '/contact', option: 'contact'}
]

const Header = () => {

    const [stateSearch, setStateSearch] = React.useState(false)

    const prueba = () => {
        if (stateSearch)setStateSearch(false)
        else setStateSearch(true)
    }

    return (
        <header className={styleHeader.header}>
            <div className={styleHeader.div_icon}>
                <Icon />
            </div>
            <nav className={styleHeader.aboutContact}>
                <ul>
                    {
                        menuOptions.map(option => (
                            <Link to={option.to} key={option.option}>
                                <li>
                                    <span >{option.option}</span>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
            <div className={styleHeader.div_search}>
                {stateSearch &&<Input />}
                <Search prueba={prueba}/>
            </div>
        </header>
    );
};

export default Header;

