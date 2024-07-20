import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function StudyCard({cards}) {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();


    const handleNext = () => {
        if (currentCard < cards.length-1) {
            setCurrentCard((currentCard) => currentCard+1);
            setIsFlipped(false);
        }
    };

    const handleFlip = ()=>{

        if (currentCard <cards.length-1) {
            setIsFlipped(!isFlipped);
        } else {
            const confirmRestart = window.confirm(
                "Restart cards?\n\nClick 'cancel' to return to the home page."
            );
            if (confirmRestart) {  //go back to the initial stage of this deck
                setCurrentCard(0);
                setIsFlipped(false);

            } else {
                navigate("/");
            }
        }
    };

    return (
        <>
            <section>
                <div>
                    <h3>Card {currentCard+1} of {cards.length} </h3>
                    {console.log("cards: ",cards," currentCard: ",currentCard, "its content: ", cards[currentCard])}
                    <p>
                        {isFlipped ? cards[currentCard].back : cards[currentCard].front}
                    </p>
                    <button onClick={handleFlip}>
                        Flip
                    </button>
                    {isFlipped && currentCard < cards.length-1 && (
                        <button onClick={handleNext} >
                            Next
                        </button>
                    )}
                </div>
            </section>
        </>
    )


 }
export default StudyCard;


