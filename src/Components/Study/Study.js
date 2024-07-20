import React, {useEffect, useState} from "react";
import {readDeck} from "../../utils/api";
import NotEnoughCards from "./NotEnoughCards";
import { useParams,useLocation} from "react-router-dom";
import StudyCard from "../Cards/StudyCard";
import BreadCrumbs from "../../Layout/BreadCrumbs";

function Study() {
    const {deckId} = useParams();
    const [deckInfo, setDeckInfo] = useState({});
    const myLocation = useLocation();

    const pathFragments = [
        { link: "/", text: "Home" },
        {
            link: `/decks/${deckId}`,
            text: deckInfo ? deckInfo.name : "Error loading deck .",
        },
        {
            text: "Study",
        },
    ];
    useEffect(() => {
        const abortController = new AbortController();

        async function fetchDeck() {
            try {
                const res = await readDeck(deckId, abortController.signal);
                setDeckInfo(res);
            } catch (error) {
                console.error('Error fetching deck info:', error);
            }
        }

        if (deckId) {
            fetchDeck();
        } else {
            console.error('deckId is not defined');
        }

        return () => {
            abortController.abort();
        };
    }, [deckId]);

    if (!deckInfo.cards) {
        return null;
    }


    return (
        <>
            <section>
                <BreadCrumbs pathFragments={pathFragments} />
                <h2>Study: {deckInfo.name}</h2>
                {(deckInfo.cards.length < 3) ?
                    <NotEnoughCards deck={deckInfo}/> :
                    <StudyCard cards={deckInfo.cards}/>
                }
            </section>
        </>
    )
}
export default Study;
