import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGames} from '../../../redux/actions/actions'
import Card from "../../molecules/card/Card";

const ListCard = ({currenGames}) => {

    return (
        <>
            {
                currenGames.map(game => (
                    <Card
                        key={game.id}
                        name_game={game.name_game}
                        image={game.image}
                        rating={game.rating}
                        release_date={game.release_date}
                    />
                ))
            }
        </>
    );
};

export default ListCard;