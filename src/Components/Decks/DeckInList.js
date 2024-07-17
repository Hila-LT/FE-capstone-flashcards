import React from "react";
import { NavLink } from "react-router-dom";
import DeleteDeck from "./DeleteDeck";

   function DeckInList ({ deck }){
       console.log("deck: ",deck);

            return (
                <article>
                    <h3>{deck.name}</h3>
                    <p>{deck.cards.length} Cards</p>
                    <p>{deck.description}</p>
                    <NavLink to={`/decks/${deck.id}`}>
                        <button>View</button>
                    </NavLink>
                    <NavLink to={`/decks/${deck.id}/study`}>
                        <button>Study</button>
                    </NavLink>
                    <DeleteDeck deck={deck} />
                </article>
            );
    }

export default DeckInList;





