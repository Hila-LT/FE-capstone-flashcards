import React from "react";
import { useLocation,NavLink } from "react-router-dom";

function CardInDeck({ card, deleteHandler }) {
    const location = useLocation();

    return (
        <div>
            <div  className="card w-50">
                <div className="card-body">
                    <table className ="table">
                        <tbody>
                        <tr>
                            <td>{card.front}</td>
                            <td>{card.back}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        <NavLink to={`${location.pathname}/cards/${card.id}/edit`}>
                            <button className="btn btn-primary" style={{marginRight: "15px"}}>Edit</button>
                        </NavLink>
                        <button className="btn btn-primary" style={{marginRight: "15px" , marginLeft:"15px"}} onClick={() => deleteHandler(card.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInDeck;