import {NavLink} from "react-router-dom";
import React from "react";

function NotEnoughCards ({deck}){
    {console.log("deck in not enough cards: ",deck)}
    let msg;
    if(deck.cards.length===1){
       msg= "There is 1 card in this deck";
    }
    else{
        msg = `There are ${deck.cards.length} cards in this deck`
    }
    return (

        <div>
            <div  className="card w-50">
                <div className="card-header">
                    Not Enough Cards
                </div>
                <div className="card-body">
                    <p>You need at least 3 cards to study. {msg}</p>
                    <NavLink to={`/decks/${deck.id}/cards/new`}>
                        <button className="btn btn-primary" type={"button"}>
                            Add Cards
                        </button>
                    </NavLink>
                </div>
            </div>

</div>
    )
}
export default NotEnoughCards;