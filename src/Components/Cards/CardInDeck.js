import React from "react";
import { useLocation,NavLink } from "react-router-dom";

function CardInDeck({ card, deleteHandler }) {
    const location = useLocation();

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>{card.front}</td>
                    <td>{card.back}</td>
                </tr>
                </tbody>
            </table>
            <div>
                <NavLink to={`${location.pathname}/cards/${card.id}/edit`}>
                    <button>Edit</button>
                </NavLink>
                <button onClick={() => deleteHandler(card.id)}>Delete</button>
            </div>
        </div>
    );
}

export default CardInDeck;