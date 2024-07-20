import {NavLink} from "react-router-dom";
import React from "react";

function NotEnoughCards ({deck}){
    {console.log("deck in not enough cards: ",deck)}
    let msg;
    if(deck.cards.length==1){
       msg= "There is 1 card in this deck";
    }
    else{
        msg = `There are ${deck.cards.length} cards in this deck`
    }
    return (

        <div>
            {/*placeholder for breadcurmbs*/}

            <h3> Not Enough Cards.</h3>
            <p>You need at least 3 cards to study. {msg}</p>
            <NavLink to="cards/new">
                <button type={"button"}>
                    Add Cards
                </button>
            </NavLink>

</div>
    )
}
export default NotEnoughCards;