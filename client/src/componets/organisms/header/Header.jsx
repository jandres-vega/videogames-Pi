import React from 'react';
import {Link} from "react-router-dom";
import styleHeader from './Header.module.scss';
import Search from "../../molecules/search/Search";
import {Icon} from "../../atoms/icons/Icon";

let menuOptions = [
    {to: '/home', option: 'Home'},
    {to: '/about', option: 'About'},
    {to: '/contact', option: 'contact'}
]

const Header = () => {

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
                <Search />
            </div>
        </header>
    );
};

export default Header;