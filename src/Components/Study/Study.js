import React, {useEffect, useState} from "react";
import {readDeck} from "../../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import { useNavigate, useParams} from "react-router-dom";

function Study() {
    const [currentDeck, setCurrentDeck] = useState(null);
    const [error, setError] = useState(undefined);
    const [cardId, setCardId] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();
    const {deckId}= useParams();

    console.log("deckid: ",deckId);

//read the deck
    useEffect(() => {
        const abortController = new AbortController();
        const loadDeck = async () => {
            try {
                const loadedDeck = await readDeck(deckId, abortController.signal);
                setCurrentDeck(loadedDeck);
            } catch (error) {
                console.error("Error loading deck:", error);
                setError(error);
            }
        };

        loadDeck();
        return () => abortController.abort();
    }, [deckId]);


    if (error) {
        return <p>ERROR: {error.message}</p>;
    }

    if (!currentDeck) {
        return <p>Loading...</p>;
    }

    if(currentDeck.cards && currentDeck.cards.length <= 2){
        return <NotEnoughCards deck={currentDeck}/>
    }

    console.log("read Deck: " + JSON.stringify(currentDeck.cards, null, 2));
  //  const deckSize = currentDeck.cards.length;

    const handleNext = () => {
        if (cardId < currentDeck.cards.length - 1) {
            setCardId(cardId + 1);
            setIsFlipped(false);
        }
    };

    const handleFlip = ()=>{

        if (cardId < currentDeck.cards.length - 1) {
            setIsFlipped(!isFlipped);
        } else {
            const confirmRestart = window.confirm(
                "Restart cards?\n\nClick 'cancel' to return to the home page."
            );
            if (confirmRestart) {
                setCardId(0);
                setIsFlipped(false);
                navigate(`/decks/${deckId}/study`);
            } else {
                navigate("/");
            }
        }
    };


    console.log("current deck: ",currentDeck.name);
    console.log("cards: ",currentDeck.cards);

    const currentCard = currentDeck.cards[cardId];
    return (
        <div>
            <h2>Study : {currentDeck.name} </h2>
            <div>
                <h3>`Card ${cardId + 1} of ${currentDeck.cards.length}` </h3>
                <p>
                    {isFlipped ? currentCard.back : currentCard.front}
                </p>
                <button onClick={handleFlip}>
                    Flip
                </button>
                {isFlipped && cardId < currentDeck.cards.length - 1 && (
                    <button onClick={handleNext} >
                        Next
                    </button>
                    )}
            </div>
        </div>
        );}

export default Study;
