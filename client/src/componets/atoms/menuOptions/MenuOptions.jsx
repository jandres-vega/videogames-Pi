import React from 'react';
import styleMenuOptions from './MenuOptions.module.scss';
import {useDispatch} from "react-redux";
import {filterByGenres, filterByPlatform} from '../../../redux/actions/actions';
const MenuOptions = ( { arrayItems, text } ) => {

    const dispatch = useDispatch();

    const handleValueGenres = (e) => {
        dispatch(filterByGenres(e.target.value))
    }
    const handlePlatforms = (e) => {
        dispatch(filterByPlatform(e.target.value))
    }

    const selectOptions = () => {
        switch (text) {
            case 'genres':
                return(
                    <select onChange={(e) => handleValueGenres(e)} className={styleMenuOptions.selectOptions}>
                        {
                            arrayItems.map(genre => (
                                <option value={genre.name_genders} key={genre.id}>{genre.name_genders}</option>
                            ))
                        }
                    </select>
                )
            case 'platforms':
                return(
                    <select onChange={(e) => handlePlatforms(e)} className={styleMenuOptions.selectOptions}>
                        {
                            arrayItems.map(platform => (
                                <option value={platform.name_platform} key={platform.id}>{platform.name_platform}</option>
                            ))
                        }
                    </select>
                )
            default :
                return(
                    <select className={styleMenuOptions.selectOptions}>
                        {
                            arrayItems.map(item => (
                                <option key={item}>{item}</option>
                            ))
                        }
                    </select>
                )
        }
    }

    return (
        <>
            {
                selectOptions()
            }
        </>
    );
};

export default MenuOptions;