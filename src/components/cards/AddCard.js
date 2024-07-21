
import BreadCrumbs from "../../layout/BreadCrumbs";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {createCard, readDeck} from "../../utils/api";
import CardForm from "./CardForm";

function AddCard() {
    const navigate=useNavigate();
    const {deckId} = useParams();
    const [deckInfo, setDeckInfo] = useState({});
    const initialState = {
        front: "",
        back: "",
    };
    const [card, setCard] = useState({ ...initialState });
    const pathFragments = [
        { link: "/", text: "Home" },
        {
            link: `/decks/${deckId}`,
            text: deckInfo ? deckInfo.name : "Error loading deck .",
        },
        {
            text: "Add Card",
        },
    ];


    //reading the deck
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



    const changeHandler = ({ target }) => {
        setCard({
            ...card,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted:", card.front, card.back);
        const abortController = new AbortController();
        try {
            await createCard(deckId, card,abortController.signal);
            setCard(initialState);
        }
        catch (error){
            console.error('Error in creating card:', error);
        }
    };

    return (
        <div className="AddCard">
            <BreadCrumbs pathFragments={pathFragments}/>
            <h3>{deckInfo.name} : Add Card</h3>
            <CardForm card={card} deckId={deckId}  changeHandler={changeHandler} handleSubmit={handleSubmit} inCreate={1} />
        </div>
    )
}

export default AddCard;
