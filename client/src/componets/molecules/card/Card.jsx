import React from 'react';
import styleCard from './Card.module.scss';
const Card = ({rating, name_game, release_date, image}) => {
    return (
        <div className={styleCard.containerCard}>
            <div className={styleCard.div_nameRating}>
                <span>Puntuacion: {rating}</span>
                <h2>{name_game}</h2>
            </div>
            <div className={styleCard.div_img_card}>
                <div className={styleCard.imgCard}>
                    <img src={image} alt="img-card"/>
                </div>
            </div>
            <div className={styleCard.date}>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export default Card;