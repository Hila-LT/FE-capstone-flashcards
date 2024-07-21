import React from "react";
import { NavLink } from "react-router-dom";
import DeleteDeckBtn from "./DeleteDeckBtn";

   function DeckInList ({ deck }){
       console.log("deck: ",deck);

            return (
                <article>
                    <div className="card w-50">
                        <div  className="card-header">{deck.name}</div>
                        <div className="card-body">
                            <p>{deck.cards.length} cards</p>
                            <p>{deck.description}</p>
                            <NavLink to={`/decks/${deck.id}`}>
                                <button className="btn btn-primary" style={{marginRight: "15px"}}>View</button>
                            </NavLink>
                            <NavLink to={`/decks/${deck.id}/study`}>
                                <button className="btn btn-primary" style={{marginLeft: "15px", marginRight:"30px"}}>Study</button>
                            </NavLink>
                            <DeleteDeckBtn deck={deck} nextScreen={"deckList"}/>
                        </div>
                    </div>
                </article>
   );
   }

   export default DeckInList;





