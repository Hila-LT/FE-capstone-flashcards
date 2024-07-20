// import React, {useEffect, useState} from "react";
// import {readDeck} from "../../utils/api";
// import NotEnoughCards from "./NotEnoughCards";
// import { useNavigate, useParams} from "react-router-dom";
//
// function Study2() {
//     const [deck, setDeck] = useState(null);
//     const [error, setError] = useState(undefined);
//     const [cardId, setCardId] = useState(0);
//     const [cards, setCards] = useState([]);
//
//     const [isFlipped, setIsFlipped] = useState(false);
//     const navigate = useNavigate();
//     const {deckId}= useParams();
//
//     console.log("deckid: ",deckId);
//
// //read the deck
//     useEffect(() => {
//         const abortController = new AbortController();
//         readDeck(deckId, abortController.signal)
//             .then((deck) => {
//                 setDeck(deck);
//                 setCards(deck.cards);
//             })
//             .catch(setError);
//         return () => abortController.abort();
//     }, [deckId]);
//
//
//     console.log("deck: ",deck);
//     if (error) {
//         return <p>ERROR: {error.message}</p>;
//     }
//
//     if (!deck) {
//         return <p>Loading...</p>;
//     }
//
//     if(deck.cards && deck.cards.length <= 2){
//         return <NotEnoughCards deck={deck}/>
//     }
//
//    // console.log("read Deck: " + JSON.stringify(deck.cards, null, 2));
//   //  const deckSize = deck.cards.length;
//
//     const handleNext = () => {
//         if (cardId < deck.cards.length - 1) {
//             setCardId(cardId + 1);
//             setIsFlipped(false);
//         }
//     };
//
//     const handleFlip = ()=>{
//
//         if (cardId < deck.cards.length - 1) {
//             setIsFlipped(!isFlipped);
//         } else {
//             const confirmRestart = window.confirm(
//                 "Restart cards?\n\nClick 'cancel' to return to the home page."
//             );
//             if (confirmRestart) {
//                 setCardId(0);
//                 setIsFlipped(false);
//                 navigate(`/decks/${deckId}/study`);
//             } else {
//                 navigate("/");
//             }
//         }
//     };
//
//
//     console.log("current deck: ",deck.name);
//    // console.log("cards: ",deck.cards);
//
//     const currentCard = deck.cards[cardId];
//     return (
//         <div>
//             <h2>Study : {deck.name} </h2>
//             <div>
//                 <h3>`Card ${cardId + 1} of ${deck.cards.length}` </h3>

//                 <p>
//                     {isFlipped ? currentCard.back : currentCard.front}
//                 </p>
//                 <button onClick={handleFlip}>
//                     Flip
//                 </button>
//                 {isFlipped && cardId < deck.cards.length - 1 && (
//                     <button onClick={handleNext} >
//                         Next
//                     </button>
//                     )}
//             </div>
//         </div>
//         );}
//
// //export default Study2;
