
import BreadCrumbs from "../../layout/BreadCrumbs";
import React, {useEffect, useState} from "react";
import { NavLink, useNavigate,useParams } from "react-router-dom";
import {updateDeck, createDeck, readDeck, updateCard, readCard} from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
    const {deckId} = useParams();
    const {cardId} = useParams();
    console.log(" in edit deck, deck id ", deckId);
    const navigate=useNavigate();
    const [deckInfo, setDeckInfo] = useState({name: "", description: ""});
    const [cardInfo, setCardInfo]= useState({front:"",back:""});

    const changeHandler = (event) => {
        setCardInfo({ ...cardInfo, [event.target.name]: event.target.value });
    };

    //reading the deck and card
    useEffect(() => {
        const abortController = new AbortController();

        async function fetchDeck() {
            try {
                const res = await readDeck(deckId, abortController.signal);
                setDeckInfo(res);
            } catch (error) {
                console.error('Error fetching deck info:', error);
            }

            try{
                const res = await readCard(cardId, abortController.signal);
                setCardInfo(res);
            }  catch (error) {
                console.error('Error fetching card info:', error);
            }
        }

        if (deckId&&cardId) {
            fetchDeck();
        } else {
            console.error('deckId or cardId are not defined');
        }

        return () => {
            abortController.abort();
        };
    }, [deckId,cardId]);

    const pathFragments = [
        { link: "/", text: "Home" },
        {
            link: `/decks/${deckId}`,
            text: deckInfo ? deckInfo.name : "Error loading deck .",
        },
        {
            text: `Edit Card ${cardId}`,
        }
    ];


    //submitting the change to the decl
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted:", cardInfo.name, cardInfo.description);
        const abortController = new AbortController();
        try {
            await updateCard(cardInfo,abortController.signal);
            navigate(`/decks/${deckId}`);
        }
        catch (error){
            console.error('Error fetching deck info:', error);
        }
    };
    if(deckInfo&&cardInfo) {
        console.log("card: ",cardInfo);
        return (
            // <DeckForm createDeck={createDeck} />
            <div className="EditCard">
                <BreadCrumbs pathFragments={pathFragments}/>
                <h3>Edit Card</h3>
                <CardForm card={cardInfo} deckId={deckId} changeHandler={changeHandler} handleSubmit={handleSubmit} inCreate={0} />
            </div>
        );
    }
    return "Loading...";
}


export default EditCard;
