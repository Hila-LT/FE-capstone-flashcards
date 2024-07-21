import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

function CardForm({  card, deckId, changeHandler, handleSubmit, inCreate }) {
    const navigate = useNavigate();

    if (!card) {
        return <p>Loading...</p>; // or some loading indicator
    }

    return (
        <div>
            <form name={"editCard"} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cardFront" className="form-label">Front</label>
                    <textarea name="front"
                              placeholder={card.front}
                              id="front"
                              type="textarea"
                              required={true}
                              rows={3}
                              onChange={changeHandler}
                              value={card.front}
                              className="form-control"
                    >
                </textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="cardBack" className="form-label">Back</label>
                    <textarea name="back"
                              placeholder={card.back}
                              id="back"
                              type="textarea"
                              required={true}
                              rows={3}
                              onChange={changeHandler}
                              value={card.back}
                              className="form-control"
                    >
                </textarea>
                </div>
                <button type="button" style={{marginRight:"15px"}} className="btn btn-primary" onClick={() => {
                        navigate(`/decks/${deckId}`);
                    }}
                >
                    {inCreate ? "Done" : "Cancel"}
                </button>
                <button type="submit" className="btn btn-primary" onClick={() => {
                    if (inCreate) {
                        window.location.reload();
                    }
                }}
                >
                    {inCreate ? "Save" : "Submit"}
                </button>
            </form>
        </div>
    )}

export default CardForm;