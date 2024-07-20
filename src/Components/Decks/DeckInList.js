import React from "react";
import { NavLink } from "react-router-dom";
import DeleteDeck from "./DeleteDeck";

   function DeckInList ({ deck }){
       console.log("deck: ",deck);

            return (
                <article>
                    <div className="card w-50">
                        <div  className="card-header">{deck.name}</div>
                        <div className="card-body">
                            <p>{deck.cards.length} Cards</p>
                            <p>{deck.description}</p>
                            <NavLink to={`/decks/${deck.id}`}>
                                <button className="btn btn-primary" style={{marginRight: "15px"}}>View</button>
                            </NavLink>
                            <NavLink to={`/decks/${deck.id}/study`}>
                                <button className="btn btn-primary" style={{marginLeft: "15px"}}>Study</button>
                            </NavLink>
                            <DeleteDeck deck={deck}/>
                        </div>
                    </div>
                </article>
   );
   }

   export default DeckInList;





