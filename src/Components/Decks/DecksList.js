import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import DeckInList from "./DeckInList";
import { NavLink } from "react-router-dom";

function DecksList() {
    const [decks, setDecks] = useState([]);
    const [error, setError] = useState(undefined);

    //loading all the decks
    useEffect(() => {
        const abortController = new AbortController();

        const fetchData = async () => {
            try {
                const fetchedDecks = await listDecks(abortController.signal);
                console.log("Fetched Decks: " + JSON.stringify(fetchedDecks, null, 2));
                setDecks(fetchedDecks);
            } catch (error) {
                console.error("Error fetching decks:", error);
                setError(error);
            }
        };

        fetchData();

        return () => {
            abortController.abort();
        };
    }, []);
    if (error) {
        return <p>ERROR: {error.message}</p>;
    }

    //destructuring the decks and rendering each deck
    const deckList = decks.map((deck) => (
        <div key={deck.id}>
            <DeckInList deck={deck}/>
        </div>
    ));
    console.log("decks: ",decks);
    return (
        <div>
            <NavLink to="decks/new">
                <button className="btn btn-primary" type="button">
                    Create Deck
                </button>
            </NavLink>
            <div>{deckList}</div>
        </div>
    );
}

export default DecksList;
