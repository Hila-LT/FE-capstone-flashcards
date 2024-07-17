import React from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import DeleteDeck from "./DeleteDeck";
import  {useEffect, useState} from "react";
import {deleteDeck, listDecks, readDeck,deleteCard} from "../../utils/api";
import CardsList from "../Cards/CardsList";

function DeckScreen() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(undefined);
    const {deckId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal)
            .then((deck) => {
                setDeck(deck);
                setCards(deck.cards);
            })
            .catch(setError);
        return () => abortController.abort();
    }, [deckId]);

    if (error) {
        return <p>ERROR: {error.message}</p>;
    }


    const handleCardDelete =  (cardId) => {
        const result = window.confirm("Delete this card? /r/n You will not be able to recover it.");
        if (result) {
            deleteCard(cardId).then(() => {
                setCards((currentCards) => currentCards.filter((card) => card.id !== cardId));
            });
        }
    }

    return (
        <div>
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <div>
                <NavLink to={`/decks/${deck.id}/edit`}>
                    <button>Edit</button>
                </NavLink>
                <NavLink to={`/decks/${deck.id}/study`}>
                    <button>Study</button>
                </NavLink>
                <NavLink to={`/decks/${deck.id}/cards/new`}>
                    <button>Add Cards</button>
                </NavLink>
                <DeleteDeck deck={deck}/>
            </div>
            {deck.cards&&(
                <CardsList cards={cards} handleDelete={handleCardDelete} />
            )}
        </div>
    );}
export default DeckScreen;
