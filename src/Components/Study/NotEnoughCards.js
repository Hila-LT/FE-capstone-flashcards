import {NavLink} from "react-router-dom";
import React from "react";

function NotEnoughCards ({deck}){

    return (
        <div>
            {/*placeholder for breadcurmbs*/}
            <h2>`{deck.name}: Study`</h2>
            <h3> Not Enough Cards.</h3>
            <p>`You need at least 3 cards to study. There are ${deck.cards.length} cards in this deck.` </p>
            <NavLink to="cards/new">
                <button type={"button"}>
                    Add Cards
                </button>
            </NavLink>

</div>
    )
}
export default NotEnoughCards;