import React from 'react';
import styleLayout from './Layout.module.scss';
import Header from "../organisms/header/Header";
const Layout = ({children}) => {
    return (
        <div className={styleLayout.template}>
            <Header />
            <div className={styleLayout.layout}>
                {children}
            </div>
        </div>
    );
};

export default Layout;