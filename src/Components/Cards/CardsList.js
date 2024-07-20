import React from "react";
import CardInDeck from "./CardInDeck";

function CardList({ cards, handleDelete }) {
    return (
        <div>
            {cards.map((card) => (
                <CardInDeck key={card.id}
                    card={card}
                    deleteHandler={() => handleDelete(card.id)} // Use handleDelete here
                />
            ))}
        </div>
    );
}

export default CardList;