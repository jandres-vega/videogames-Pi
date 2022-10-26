import React from 'react';
import MenuOptions from "../../atoms/menuOptions/MenuOptions";
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres, getAllPlatforms} from "../../../redux/actions/actions";
import styleSideBar from './Sidebar.module.scss';

const Sidebar = () => {

    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.allGenres);
    const allPlatforms = useSelector(state => state.allPlatforms);

    const orderBy = ['Min - Max', 'Max - Min', 'A - Z', 'Z - A'];

    React.useEffect(() => {
        dispatch(getAllGenres());
        dispatch(getAllPlatforms());
    },[]);

    return (
        <div className={styleSideBar.sidebar}>
            <div>
                <MenuOptions arrayItems={orderBy} text={'orderBy'} />
            </div>
            <div>
                <MenuOptions arrayItems={allPlatforms} text={'platforms'} />
            </div>
            <div>
                <MenuOptions arrayItems={allGenres} text={'genres'} />
            </div>

        </div>
    );
};

export default Sidebar;