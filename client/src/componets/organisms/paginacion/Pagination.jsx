import React from 'react';
import stylePagination from './Pagination.module.scss';
const Pagination = ({gamesByPag, allGames, paginado}) => {

    let pagNumber = [];

    for (let i = 1; i <= Math.ceil(allGames.length/gamesByPag); i++){
        pagNumber.push(i);
    }
    return (
        <div className={stylePagination.pag_nav}>
            <ul>
                {
                    pagNumber && pagNumber.map(number => (
                        <li key={number}>
                            <div className={stylePagination.container_number}>
                                <a onClick={() => paginado(number)}>{number}</a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;