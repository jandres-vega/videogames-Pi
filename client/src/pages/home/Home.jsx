import React from 'react';
import styleHome from './Home.module.scss';
import Sidebar from "../../componets/organisms/sideBar/Sidebar";
import ListCard from "../../componets/organisms/listCard/ListCard";
import Pagination from "../../componets/organisms/paginacion/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {getAllGames} from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();
    const allGames = useSelector(state => state.allGames);

    const [currentPag, setCurrentPag] = React.useState(1);
    const [gamesByPag] = React.useState(6);

    const [loading, setLoading] = React.useState(false);

    const indexVideoGames = gamesByPag * currentPag;
    const indexPrimerGame = indexVideoGames - gamesByPag;

    const currenGames = allGames.slice(indexPrimerGame, indexVideoGames);

    const paginado = (paginado) => {
        setCurrentPag(paginado)
    }

    React.useEffect(() => {
        dispatch(getAllGames()).then(() => {
            setLoading(false)
        })

        setLoading(true)
    }, []);

    return (
        <>
            <Pagination gamesByPag={gamesByPag} allGames={allGames} paginado={paginado} />
            {(loading && allGames.length ===0) &&<h1 className={styleHome.loading}>Cargando, espera un momento</h1>}
            <main className={styleHome.containerMain}>
                <>
                    <Sidebar />
                </>
                <div className={styleHome.listCard}>
                    <ListCard currenGames={currenGames} />
                </div>
            </main>
        </>
    );
};

export {Home};