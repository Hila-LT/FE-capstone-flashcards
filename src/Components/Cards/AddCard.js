
import BreadCrumbs from "../../Layout/BreadCrumbs";
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {createCard, readDeck} from "../../utils/api";

function AddCard() {
    const navigate=useNavigate();
    const {deckId} = useParams();
    const [deckInfo, setDeckInfo] = useState({});

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
    const initialState = {
        front: "",
        back: "",
    };

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

    const [formData, setFormData] = useState({ ...initialState });

    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitted:", formData.front, formData.back);
        const abortController = new AbortController();
        try {
            await createCard(deckId, formData,abortController.signal);
            navigate(`/decks/${deckId}`);
            setFormData(initialState);
        }
        catch (error){
            console.error('Error fetching deck info:', error);
        }
    };
    return (
        // <DeckForm createDeck={createDeck} />
        <div className="AddCard">
            <BreadCrumbs pathFragments={pathFragments}/>
            <h3>{deckInfo.name} : Add Card</h3>
            <form name={"addCard"} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="front" className="form-label">Front</label>
                    <textarea id="front"
                           type="textarea"
                           name="front"
                           required={true}
                           rows={3}
                           onChange={changeHandler}
                           value={formData.front}
                           className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="back" className="form-label">Back</label>
                    <textarea name="back"
                              id="back"
                              type="textarea"
                              required={true}
                              rows={3}
                              onChange={changeHandler}
                              value={formData.back}
                              className="form-control"

                    >
                    </textarea>
                </div>
                <NavLink to={`/deck/${deckInfo.id}`}>
                    <button className="btn btn-secondary" style={{marginRight: "15px"}}>Done</button>
                </NavLink>
                <button type="submit" style={{marginLeft: "15px"}} className="btn btn-primary">Save</button>


            </form>
        </div>
    );
}

export default AddCard;
