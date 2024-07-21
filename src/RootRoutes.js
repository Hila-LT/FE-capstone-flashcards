
import React from 'react'
import DecksList from "./components/decks/DecksList";
import DeckScreen from "./components/decks/DeckScreen";
import CreateDeck from "./components/decks/CreateDeck";
import EditDeck from "./components/decks/EditDeck";
import Study from "./components/study/Study";
import CardsList from "./components/cards/CardsList";
import AddCard from "./components/cards/AddCard";
import EditCard from "./components/cards/EditCard";
import NotFound from "./layout/NotFound";
import {Routes, Route } from "react-router-dom";


function RootRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DecksList />} />
                <Route path="/decks" element={<DecksList />} />
                <Route path="/decks/new" element={<CreateDeck />} />
                <Route path="/decks/:deckId" element={<DeckScreen />} />
                <Route path="/decks/:deckId/study" element={<Study />} />
                <Route path="/decks/:deckId/edit" element={<EditDeck />} />
                <Route path="/decks/:deckId/cards/new" element={<AddCard />} />
                <Route path="/decks/:deckId/cards/:cardId/edit" element={<EditCard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )

}
export default RootRoutes;
/*
* Screen	Path	Description
Home	/	                                    Shows a list of decks with options to create, study, view, or delete a deck
Create DeckInList	/decks/new	                        Allows the user to create a new deck
DeckInList	    /decks/:deckId	                        Shows all of the information about a specified deck with options to edit or add cards to the deck, navigate to the study screen, or delete the deck
Study	    /decks/:deckId/study	                Allows the user to study the cards from a specified deck
* Edit DeckInList	/decks/:deckId/edit	                Allows the user to modify information on an existing deck
Add Card	/decks/:deckId/cards/new	        Allows the user to add a new card to an existing deck
Edit Card	/decks/:deckId/cards/:cardId/edit	Allows the user to modify information on an existing card
* */